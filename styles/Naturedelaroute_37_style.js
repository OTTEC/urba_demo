var size = 0;
var placement = 'point';
function categories_Naturedelaroute_37(feature, value, size, resolution, labelText,
                       labelFont, labelFill, bufferColor, bufferWidth,
                       placement) {
                var valueStr = (value !== null && value !== undefined) ? value.toString() : 'default';
                switch(valueStr) {case 'Type autoroutier':
                    return [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(255,96,17,1.0)', lineDash: null, lineCap: 'round', lineJoin: 'round', width: 5.548}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case 'Bretelle':
                    return [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(255,96,17,1.0)', lineDash: null, lineCap: 'round', lineJoin: 'round', width: 2.508}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case 'Route à 2 chaussées':
                    return [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(158,158,158,1.0)', lineDash: null, lineCap: 'round', lineJoin: 'round', width: 6.308}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case 'Chemin':
                    return [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(136,214,102,1.0)', lineDash: null, lineCap: 'square', lineJoin: 'bevel', width: 2.508}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case 'Escalier':
                    return [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(216,128,219,1.0)', lineDash: null, lineCap: 'square', lineJoin: 'bevel', width: 1.748}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case 'Rond-point':
                    return [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(57,57,57,1.0)', lineDash: null, lineCap: 'round', lineJoin: 'round', width: 6.308}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case 'Route empierrée':
                    return [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(232,232,232,1.0)', lineDash: null, lineCap: 'square', lineJoin: 'bevel', width: 1.748}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case 'Route à 1 chaussée':
                    return [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(158,158,158,1.0)', lineDash: null, lineCap: 'round', lineJoin: 'round', width: 4.787999999999999}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case 'Sentier':
                    return [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(182,127,0,1.0)', lineDash: null, lineCap: 'square', lineJoin: 'bevel', width: 2.508}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;}};

var style_Naturedelaroute_37 = function(feature, resolution){
    var context = {
        feature: feature,
        variables: {}
    };
    
    var labelText = ""; var value = feature.get("NATURE");
    var labelFont = "10px, sans-serif";
    var labelFill = "#000000";
    var bufferColor = "";
    var bufferWidth = 0;
    var textAlign = "left";
    var offsetX = 0;
    var offsetY = 0;
    var placement = 'line';
    if ("" !== null) {
        labelText = String("");
    }
    
    var style = categories_Naturedelaroute_37(feature, value, size, resolution, labelText,
                            labelFont, labelFill, bufferColor,
                            bufferWidth, placement);

    return style;
};
