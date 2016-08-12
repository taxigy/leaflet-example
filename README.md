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

## TODO

- [x] Make scrolling work natively (see [prototype of current implementation](http://jsfiddle.net/cxZRM/297/))
- [ ] Restrict zoom levels
- [ ] Find a way to produce tiles and expose them on server
- [ ] Use with non-map tiles (see ["Is Leaflet a good tool for non-map images?"](http://stackoverflow.com/q/13110763/1287643))

## Links

- Interesting, but wrong implementation of scroll-to-pan: [jsfiddle](https://jsfiddle.net/3v7hd2vx/67/).
