import H from '../parts/Globals.js';
import '../parts/Utilities.js';
import '../parts/Options.js';
	var seriesType = H.seriesType,
		seriesTypes = H.seriesTypes;
/**
 * The areasplinerange series type
 */
seriesType('areasplinerange', 'arearange', null, {
	getPointSpline: seriesTypes.spline.prototype.getPointSpline
});
