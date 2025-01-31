/* *
 * Web Mercator projection, used for most online map tile services
 * */

'use strict';

import type { LonLatArray } from '../MapViewOptions';
import type ProjectionDefinition from '../ProjectionDefinition';

const maxLatitude = 85.0511287798, // The latitude that defines a square
    r = 63.78137,
    deg2rad = Math.PI / 180;

export default class WebMercator implements ProjectionDefinition {

    bounds = {
        x1: -200.37508342789243,
        x2: 200.37508342789243,
        y1: -200.3750834278071,
        y2: 200.3750834278071
    };

    forward(lonLat: LonLatArray): [number, number] {

        if (Math.abs(lonLat[1]) > maxLatitude) {
            return [NaN, NaN];
        }

        const sinLat = Math.sin(lonLat[1] * deg2rad);

        return [
            r * lonLat[0] * deg2rad,
            r * Math.log((1 + sinLat) / (1 - sinLat)) / 2
        ];
    }

    inverse(xy: [number, number]): LonLatArray {
        return [
            xy[0] / (r * deg2rad),
            (2 * Math.atan(Math.exp(xy[1] / r)) - (Math.PI / 2)) / deg2rad
        ];
    }

    maxLatitude = maxLatitude;
}
