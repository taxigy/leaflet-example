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

## TODO

- [x] Make scrolling work natively
- [ ] Restrict zoom levels
- [ ] Find a way to produce tiles and expose them on server
