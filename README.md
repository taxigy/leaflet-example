# Leaflet example
Research on Leaflet to use with non-map tiles

## Pros and cons

Advantages:

- Leaflet is a popular library
- API is nice
- Just about 40 lines of code to make it work in a React component

Disadvantages:

- Map dimensions are different from potentially random dimensions of flyers
- Need to prepare and serve tiles
- Number of tiles grows in exponential proportion to number of zoom levels

## Dividing into tiles

[Cropping into equally sized divisions](http://www.imagemagick.org/Usage/crop/#crop_equal) with ImageMagick, but two problems:

- need to do know the size of the image,
- need to place this image on the center of 256Nx256M white canvas

So,

```bash
convert -density 150 -background white -alpha remove "input.pdf" +append -crop "256x256" +repage +adjoin "output_%02d.png"
```

does the trick. It takes a PDF, extracts images with density 150 ppi, stitches them horizontally and then cuts into pieces of 256x256 dimensions. The names are `output_01.png`, `output_02.png`, etc., so bringing them into [z, x, y] triplets is still a challenge. To do that, we need to know original image dimensions.

## TODO

- [x] Make scrolling work natively (see [prototype of current implementation](http://jsfiddle.net/cxZRM/297/))
- [x] Restrict zoom levels
- [x] Find a way to produce tiles and expose them on server
- [ ] Rename tiles from linear range into [x, y] pairs.
- [ ] Use with non-map tiles (see ["Is Leaflet a good tool for non-map images?"](http://stackoverflow.com/q/13110763/1287643))

## Links

- Interesting, but wrong implementation of scroll-to-pan: [jsfiddle](https://jsfiddle.net/3v7hd2vx/67/).
