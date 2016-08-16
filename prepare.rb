# tile_width = 256
# tile_height = 256
# image_width = 2048
# image_height = 1792
# n = 0
# # To get this number, look at the number of tiles
# # generated, find the last tile number and add 1
# # e.g. tiles_99.png => total_tiles = 100
# # total_tiles = image_width / tile_width * image_height / tile_width
# total_tiles = 111
# # Set zoom level for tiles
# zoom = 16
#
# tiles_per_column = 8
#
# row = 0
# column = 0
# (n...total_tiles).each do |i|
#   filename = "output_#{i}.png" # current filename
#   target = "tile_#{zoom}_#{column}_#{row}.png" # new filename
#
#   puts "copy #{filename} to #{target}"
#
#   `cp -f #{filename} #{target}` # rename
#
#   # work out next step
#   column = column + 1
#   if column >= tiles_per_column
#     column = 0
#     row = row + 1
#   end
# end



pdf = ARGV[0]
ms = [[300, 16], [150, 15]]

ms.each do |density, zoom|
  png = "source_#{zoom}.png"
  `convert -density #{density} -background white -alpha remove "#{pdf}" +append "#{png}"`
  matching = /^.*PNG\s(\d+)x(\d+).*$/.match `identify #{png}`
  width = matching[1].to_i
  height = matching[2].to_i
  width2 = width + 256 - (width % 256)
  height2 = height + 256 - (height % 256)
  cols = width2 / 256
  rows = height2 / 256
  puts "Initial dimensions: #{width}x#{height}, new dimensions: #{width2}x#{height2}"
  `convert -gravity center -background white -extent "#{width2}x#{height2}" "#{png}" "#{png}"`
  `convert -crop "256x256" +repage +adjoin "#{png}" "tile_#{zoom}_%01d.png"`

  col = 0
  row = 0
  (0...(cols * rows)).each do |n|
    initial = "tile_#{zoom}_#{n}.png"
    target = "tile_#{zoom}_#{col}_#{row}.png"

    puts "#{initial} -> #{target}"

    `mv #{initial} #{target}`

    col += 1

    if col >= cols
      col = 0
      row += 1
    end
  end
end
