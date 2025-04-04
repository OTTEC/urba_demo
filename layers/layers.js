var wms_layers = [];


        var lyr_BDOrthoIGN_0 = new ol.layer.Tile({
            'title': 'BDOrtho IGN',
            'type':'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' &nbsp &middot; <a href="https://openstreetmap.fr/bdortho">BDOrtho IGN</a>',
                url: 'https://proxy-ign.openstreetmap.fr/94GjiyqD/bdortho/{z}/{x}/{y}.jpg'
            })
        });
var format_Secteurs_1 = new ol.format.GeoJSON();
var features_Secteurs_1 = format_Secteurs_1.readFeatures(json_Secteurs_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Secteurs_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Secteurs_1.addFeatures(features_Secteurs_1);
var lyr_Secteurs_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Secteurs_1, 
                style: style_Secteurs_1,
                popuplayertitle: 'Secteurs',
                interactive: true,
    title: 'Secteurs<br />\
    <img src="styles/legend/Secteurs_1_0.png" /> UCp<br />\
    <img src="styles/legend/Secteurs_1_1.png" /> UFp<br />\
    <img src="styles/legend/Secteurs_1_2.png" /> UH<br />\
    <img src="styles/legend/Secteurs_1_3.png" /> UR<br />\
    <img src="styles/legend/Secteurs_1_4.png" /> UE<br />\
    <img src="styles/legend/Secteurs_1_5.png" /> UV<br />\
    <img src="styles/legend/Secteurs_1_6.png" /> UZa<br />\
    <img src="styles/legend/Secteurs_1_7.png" /> UZi<br />\
    <img src="styles/legend/Secteurs_1_8.png" /> UZc<br />\
    <img src="styles/legend/Secteurs_1_9.png" /> UZcp<br />\
    <img src="styles/legend/Secteurs_1_10.png" /> UZe<br />\
    <img src="styles/legend/Secteurs_1_11.png" /> UZep<br />\
    <img src="styles/legend/Secteurs_1_12.png" /> AUE1<br />\
    <img src="styles/legend/Secteurs_1_13.png" /> AUE2<br />\
    <img src="styles/legend/Secteurs_1_14.png" /> 1AUHs<br />\
    <img src="styles/legend/Secteurs_1_15.png" /> 1AUHm<br />\
    <img src="styles/legend/Secteurs_1_16.png" /> 2AUV<br />\
    <img src="styles/legend/Secteurs_1_17.png" /> A<br />\
    <img src="styles/legend/Secteurs_1_18.png" /> As<br />\
    <img src="styles/legend/Secteurs_1_19.png" /> Aze<br />\
    <img src="styles/legend/Secteurs_1_20.png" /> N<br />\
    <img src="styles/legend/Secteurs_1_21.png" /> Np<br />\
    <img src="styles/legend/Secteurs_1_22.png" /> Na<br />\
    <img src="styles/legend/Secteurs_1_23.png" /> Nap<br />\
    <img src="styles/legend/Secteurs_1_24.png" /> Nj<br />' });
var format_Prescriptionssurfaciques_2 = new ol.format.GeoJSON();
var features_Prescriptionssurfaciques_2 = format_Prescriptionssurfaciques_2.readFeatures(json_Prescriptionssurfaciques_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Prescriptionssurfaciques_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Prescriptionssurfaciques_2.addFeatures(features_Prescriptionssurfaciques_2);
var lyr_Prescriptionssurfaciques_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Prescriptionssurfaciques_2, 
                style: style_Prescriptionssurfaciques_2,
                popuplayertitle: 'Prescriptions surfaciques',
                interactive: true,
    title: 'Prescriptions surfaciques<br />\
    <img src="styles/legend/Prescriptionssurfaciques_2_0.png" /> Emplacement réservé n°1 (Amélioration du virage)<br />\
    <img src="styles/legend/Prescriptionssurfaciques_2_1.png" /> Espace boisé L151-23 CU<br />\
    <img src="styles/legend/Prescriptionssurfaciques_2_2.png" /> Mare L151-23 CU<br />\
    <img src="styles/legend/Prescriptionssurfaciques_2_3.png" /> Parcs, fossés et jardins L151-23 CU<br />\
    <img src="styles/legend/Prescriptionssurfaciques_2_4.png" /> Périmètre OAP n°1 (Les Monts Foys IV)<br />\
    <img src="styles/legend/Prescriptionssurfaciques_2_5.png" /> Périmètre OAP n°2 (La Côte de Saint Aubin)<br />\
    <img src="styles/legend/Prescriptionssurfaciques_2_6.png" /> Périmètre OAP n°3 (Saint Clair Nord)<br />\
    <img src="styles/legend/Prescriptionssurfaciques_2_7.png" /> Périmètre OAP n°4 (Equipements publics de l’avenue des anciens combattants)<br />\
    <img src="styles/legend/Prescriptionssurfaciques_2_8.png" /> Périmètre OAP n°5 (Nouveau groupe scolaire)<br />\
    <img src="styles/legend/Prescriptionssurfaciques_2_9.png" /> Périmètre OAP n°6 (Parking nord de l\'Atelier)<br />\
    <img src="styles/legend/Prescriptionssurfaciques_2_10.png" /> Risque d’inondation par crue de rivière - aléa faible<br />\
    <img src="styles/legend/Prescriptionssurfaciques_2_11.png" /> Risque d’inondation par crue de rivière - aléa fort<br />\
    <img src="styles/legend/Prescriptionssurfaciques_2_12.png" /> Risque d’inondation par ruissellement<br />\
    <img src="styles/legend/Prescriptionssurfaciques_2_13.png" /> Risque géologique<br />\
    <img src="styles/legend/Prescriptionssurfaciques_2_14.png" /> Verger L151-23 CU<br />\
    <img src="styles/legend/Prescriptionssurfaciques_2_15.png" /> Zone des effets indirects par bris de verre (Zbv)<br />\
    <img src="styles/legend/Prescriptionssurfaciques_2_16.png" /> Zone des effets irréversibles (Zei)<br />\
    <img src="styles/legend/Prescriptionssurfaciques_2_17.png" /> Zone des premiers effets létaux (Zpel)<br />\
    <img src="styles/legend/Prescriptionssurfaciques_2_18.png" /> Zone humide L151-23 CU<br />' });
var format_Prescriptionslinaires_3 = new ol.format.GeoJSON();
var features_Prescriptionslinaires_3 = format_Prescriptionslinaires_3.readFeatures(json_Prescriptionslinaires_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Prescriptionslinaires_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Prescriptionslinaires_3.addFeatures(features_Prescriptionslinaires_3);
var lyr_Prescriptionslinaires_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Prescriptionslinaires_3, 
                style: style_Prescriptionslinaires_3,
                popuplayertitle: 'Prescriptions linéaires',
                interactive: true,
    title: 'Prescriptions linéaires<br />\
    <img src="styles/legend/Prescriptionslinaires_3_0.png" /> Alignement d’arbres (haie basse) L151-23 CU<br />\
    <img src="styles/legend/Prescriptionslinaires_3_1.png" /> Alignement d’arbres de haut-jet L151-23 CU<br />\
    <img src="styles/legend/Prescriptionslinaires_3_2.png" /> Alignement d’arbres en taillis ou moyen développement L151-23 CU<br />\
    <img src="styles/legend/Prescriptionslinaires_3_3.png" /> Ripisylve basse L151-23 CU<br />\
    <img src="styles/legend/Prescriptionslinaires_3_4.png" /> Ripisylve haute L151-23 CU<br />\
    <img src="styles/legend/Prescriptionslinaires_3_5.png" /> Cours d’eau L151-23 CU (Canal des Planquettes)<br />\
    <img src="styles/legend/Prescriptionslinaires_3_6.png" /> Cours d’eau L151-23 CU (Canal des Tanneurs)<br />\
    <img src="styles/legend/Prescriptionslinaires_3_7.png" /> Cours d’eau L151-23 CU (L\'Epte)<br />\
    <img src="styles/legend/Prescriptionslinaires_3_8.png" /> Cours d’eau L151-23 CU (La Morette)<br />\
    <img src="styles/legend/Prescriptionslinaires_3_9.png" /> Cours d’eau L151-23 CU (Le Gouffre)<br />\
    <img src="styles/legend/Prescriptionslinaires_3_10.png" /> Mur remarquable L151-19 CU<br />\
    <img src="styles/legend/Prescriptionslinaires_3_11.png" /> Mur remarquable L151-19 CU (Clôture en fer forgé)<br />\
    <img src="styles/legend/Prescriptionslinaires_3_12.png" /> Mur remarquable L151-19 CU (Emmarchement monumental)<br />\
    <img src="styles/legend/Prescriptionslinaires_3_13.png" /> Mur remarquable L151-19 CU (Grille et portail)<br />\
    <img src="styles/legend/Prescriptionslinaires_3_14.png" /> Mur remarquable L151-19 CU (Grille)<br />\
    <img src="styles/legend/Prescriptionslinaires_3_15.png" /> Mur remarquable L151-19 CU (Mur d\'enceinte du cimetière)<br />\
    <img src="styles/legend/Prescriptionslinaires_3_16.png" /> Mur remarquable L151-19 CU (Mur en brique - portions en fer forgé)<br />\
    <img src="styles/legend/Prescriptionslinaires_3_17.png" /> Mur remarquable L151-19 CU (Mur en brique)<br />\
    <img src="styles/legend/Prescriptionslinaires_3_18.png" /> Mur remarquable L151-19 CU (Mur en pierre et portail)<br />\
    <img src="styles/legend/Prescriptionslinaires_3_19.png" /> Mur remarquable L151-19 CU (Mur en pierre surmonté de fer forgé)<br />\
    <img src="styles/legend/Prescriptionslinaires_3_20.png" /> Mur remarquable L151-19 CU (Mur en pierre)<br />\
    <img src="styles/legend/Prescriptionslinaires_3_21.png" /> Mur remarquable L151-19 CU (Mur et grille)<br />\
    <img src="styles/legend/Prescriptionslinaires_3_22.png" /> Mur remarquable L151-19 CU (Mur et porche)<br />\
    <img src="styles/legend/Prescriptionslinaires_3_23.png" /> Mur remarquable L151-19 CU (Mur et portail)<br />\
    <img src="styles/legend/Prescriptionslinaires_3_24.png" /> Mur remarquable L151-19 CU (Mur et portails)<br />\
    <img src="styles/legend/Prescriptionslinaires_3_25.png" /> Mur remarquable L151-19 CU (Mur maçonné et portail)<br />\
    <img src="styles/legend/Prescriptionslinaires_3_26.png" /> Mur remarquable L151-19 CU (Mur, grille et portail)<br />\
    <img src="styles/legend/Prescriptionslinaires_3_27.png" /> Mur remarquable L151-19 CU (Mur)<br />\
    <img src="styles/legend/Prescriptionslinaires_3_28.png" /> Mur remarquable L151-19 CU (Muret et grille)<br />\
    <img src="styles/legend/Prescriptionslinaires_3_29.png" /> Mur remarquable L151-19 CU (Muret)<br />\
    <img src="styles/legend/Prescriptionslinaires_3_30.png" /> Linéaire de préservation de la diversité commerciale L151-16 CU<br />' });
var format_Prescriptionsponctuelles_4 = new ol.format.GeoJSON();
var features_Prescriptionsponctuelles_4 = format_Prescriptionsponctuelles_4.readFeatures(json_Prescriptionsponctuelles_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Prescriptionsponctuelles_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Prescriptionsponctuelles_4.addFeatures(features_Prescriptionsponctuelles_4);
var lyr_Prescriptionsponctuelles_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Prescriptionsponctuelles_4, 
                style: style_Prescriptionsponctuelles_4,
                popuplayertitle: 'Prescriptions ponctuelles',
                interactive: true,
    title: 'Prescriptions ponctuelles<br />\
    <img src="styles/legend/Prescriptionsponctuelles_4_0.png" /> Arbre isolé L151-23 CU<br />\
    <img src="styles/legend/Prescriptionsponctuelles_4_1.png" /> Arbre isolé L151-23 CU (Cèdre bleu)<br />\
    <img src="styles/legend/Prescriptionsponctuelles_4_2.png" /> Bâtiment pouvant changer de destination en zone agricole L151-11-2 CU<br />\
    <img src="styles/legend/Prescriptionsponctuelles_4_3.png" /> Construction remarquable L151-19 CU<br />\
    <img src="styles/legend/Prescriptionsponctuelles_4_4.png" /> Construction remarquable L151-19 CU (Ancienne ferme)<br />\
    <img src="styles/legend/Prescriptionsponctuelles_4_5.png" /> Construction remarquable L151-19 CU (Anciens abattoirs)<br />\
    <img src="styles/legend/Prescriptionsponctuelles_4_6.png" /> Construction remarquable L151-19 CU (Chapelle)<br />\
    <img src="styles/legend/Prescriptionsponctuelles_4_7.png" /> Construction remarquable L151-19 CU (Château Pommel)<br />\
    <img src="styles/legend/Prescriptionsponctuelles_4_8.png" /> Construction remarquable L151-19 CU (Maison de maître)<br />\
    <img src="styles/legend/Prescriptionsponctuelles_4_9.png" /> Construction remarquable L151-19 CU (Maison éclectique)<br />\
    <img src="styles/legend/Prescriptionsponctuelles_4_10.png" /> Construction remarquable L151-19 CU (Maison ouvrière post-classique)<br />\
    <img src="styles/legend/Prescriptionsponctuelles_4_11.png" /> Construction remarquable L151-19 CU (Maison style éclectique)<br />\
    <img src="styles/legend/Prescriptionsponctuelles_4_12.png" /> Construction remarquable L151-19 CU (Villa style anglo-normand)<br />' });
var format_Codessecteurs_5 = new ol.format.GeoJSON();
var features_Codessecteurs_5 = format_Codessecteurs_5.readFeatures(json_Codessecteurs_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Codessecteurs_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Codessecteurs_5.addFeatures(features_Codessecteurs_5);
var lyr_Codessecteurs_5 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Codessecteurs_5, 
                style: style_Codessecteurs_5,
                popuplayertitle: 'Codes secteurs',
                interactive: true,
                title: 'Codes secteurs'
            });
var format_Secteurs_6 = new ol.format.GeoJSON();
var features_Secteurs_6 = format_Secteurs_6.readFeatures(json_Secteurs_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Secteurs_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Secteurs_6.addFeatures(features_Secteurs_6);
var lyr_Secteurs_6 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Secteurs_6, 
                style: style_Secteurs_6,
                popuplayertitle: 'Secteurs',
                interactive: true,
    title: 'Secteurs<br />\
    <img src="styles/legend/Secteurs_6_0.png" /> 1AU<br />\
    <img src="styles/legend/Secteurs_6_1.png" /> 1AUe<br />\
    <img src="styles/legend/Secteurs_6_2.png" /> A<br />\
    <img src="styles/legend/Secteurs_6_3.png" /> N<br />\
    <img src="styles/legend/Secteurs_6_4.png" /> Nj<br />\
    <img src="styles/legend/Secteurs_6_5.png" /> Ny<br />\
    <img src="styles/legend/Secteurs_6_6.png" /> Ua<br />\
    <img src="styles/legend/Secteurs_6_7.png" /> Ub<br />\
    <img src="styles/legend/Secteurs_6_8.png" /> Ue<br />\
    <img src="styles/legend/Secteurs_6_9.png" /> Uh<br />\
    <img src="styles/legend/Secteurs_6_10.png" /> Uyc<br />\
    <img src="styles/legend/Secteurs_6_11.png" /> Uyi<br />' });
var format_Prescriptionssurfaciques_7 = new ol.format.GeoJSON();
var features_Prescriptionssurfaciques_7 = format_Prescriptionssurfaciques_7.readFeatures(json_Prescriptionssurfaciques_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Prescriptionssurfaciques_7 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Prescriptionssurfaciques_7.addFeatures(features_Prescriptionssurfaciques_7);
var lyr_Prescriptionssurfaciques_7 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Prescriptionssurfaciques_7, 
                style: style_Prescriptionssurfaciques_7,
                popuplayertitle: 'Prescriptions surfaciques',
                interactive: true,
    title: 'Prescriptions surfaciques<br />\
    <img src="styles/legend/Prescriptionssurfaciques_7_0.png" /> Emplacement réservé n°1<br />\
    <img src="styles/legend/Prescriptionssurfaciques_7_1.png" /> Emplacement réservé n°2<br />\
    <img src="styles/legend/Prescriptionssurfaciques_7_2.png" /> Orientation d\'Aménagement et de Programmation<br />\
    <img src="styles/legend/Prescriptionssurfaciques_7_3.png" /> Protection des Espaces boisées Classés<br />\
    <img src="styles/legend/Prescriptionssurfaciques_7_4.png" /> Protection des zones humides<br />\
    <img src="styles/legend/Prescriptionssurfaciques_7_5.png" /> Protection du patrimoine<br />' });
var format_Prescriptionslinaires_8 = new ol.format.GeoJSON();
var features_Prescriptionslinaires_8 = format_Prescriptionslinaires_8.readFeatures(json_Prescriptionslinaires_8, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Prescriptionslinaires_8 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Prescriptionslinaires_8.addFeatures(features_Prescriptionslinaires_8);
var lyr_Prescriptionslinaires_8 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Prescriptionslinaires_8, 
                style: style_Prescriptionslinaires_8,
                popuplayertitle: 'Prescriptions linéaires',
                interactive: true,
    title: 'Prescriptions linéaires<br />\
    <img src="styles/legend/Prescriptionslinaires_8_0.png" /> Protection des haies et alignements d\'arbres<br />' });
var format_Prescriptionsponctuelles_9 = new ol.format.GeoJSON();
var features_Prescriptionsponctuelles_9 = format_Prescriptionsponctuelles_9.readFeatures(json_Prescriptionsponctuelles_9, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Prescriptionsponctuelles_9 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Prescriptionsponctuelles_9.addFeatures(features_Prescriptionsponctuelles_9);
var lyr_Prescriptionsponctuelles_9 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Prescriptionsponctuelles_9, 
                style: style_Prescriptionsponctuelles_9,
                popuplayertitle: 'Prescriptions ponctuelles',
                interactive: true,
    title: 'Prescriptions ponctuelles<br />\
    <img src="styles/legend/Prescriptionsponctuelles_9_0.png" /> Protection des arbres<br />\
    <img src="styles/legend/Prescriptionsponctuelles_9_1.png" /> Protection des mares<br />\
    <img src="styles/legend/Prescriptionsponctuelles_9_2.png" /> Protection patrimoine<br />' });
var format_Codessecteurs_10 = new ol.format.GeoJSON();
var features_Codessecteurs_10 = format_Codessecteurs_10.readFeatures(json_Codessecteurs_10, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Codessecteurs_10 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Codessecteurs_10.addFeatures(features_Codessecteurs_10);
var lyr_Codessecteurs_10 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Codessecteurs_10, 
                style: style_Codessecteurs_10,
                popuplayertitle: 'Codes secteurs',
                interactive: false,
                title: 'Codes secteurs'
            });
var format_EA_11 = new ol.format.GeoJSON();
var features_EA_11 = format_EA_11.readFeatures(json_EA_11, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_EA_11 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_EA_11.addFeatures(features_EA_11);
var lyr_EA_11 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_EA_11, 
                style: style_EA_11,
                popuplayertitle: 'E.A.',
                interactive: false,
                title: '<img src="styles/legend/EA_11.png" /> E.A.'
            });
var format_SitesauxabordslimitrophesSM_12 = new ol.format.GeoJSON();
var features_SitesauxabordslimitrophesSM_12 = format_SitesauxabordslimitrophesSM_12.readFeatures(json_SitesauxabordslimitrophesSM_12, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_SitesauxabordslimitrophesSM_12 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_SitesauxabordslimitrophesSM_12.addFeatures(features_SitesauxabordslimitrophesSM_12);
var lyr_SitesauxabordslimitrophesSM_12 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_SitesauxabordslimitrophesSM_12, 
                style: style_SitesauxabordslimitrophesSM_12,
                popuplayertitle: 'Sites aux abords (limitrophes S-M)',
                interactive: true,
                title: '<img src="styles/legend/SitesauxabordslimitrophesSM_12.png" /> Sites aux abords (limitrophes S-M)'
            });
var format_Sitesauxabordsdesmonuments_13 = new ol.format.GeoJSON();
var features_Sitesauxabordsdesmonuments_13 = format_Sitesauxabordsdesmonuments_13.readFeatures(json_Sitesauxabordsdesmonuments_13, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Sitesauxabordsdesmonuments_13 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Sitesauxabordsdesmonuments_13.addFeatures(features_Sitesauxabordsdesmonuments_13);
var lyr_Sitesauxabordsdesmonuments_13 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Sitesauxabordsdesmonuments_13, 
                style: style_Sitesauxabordsdesmonuments_13,
                popuplayertitle: 'Sites aux abords des monuments',
                interactive: true,
                title: '<img src="styles/legend/Sitesauxabordsdesmonuments_13.png" /> Sites aux abords des monuments'
            });
var format_SitesPatrimoniauxRemarquables_14 = new ol.format.GeoJSON();
var features_SitesPatrimoniauxRemarquables_14 = format_SitesPatrimoniauxRemarquables_14.readFeatures(json_SitesPatrimoniauxRemarquables_14, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_SitesPatrimoniauxRemarquables_14 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_SitesPatrimoniauxRemarquables_14.addFeatures(features_SitesPatrimoniauxRemarquables_14);
var lyr_SitesPatrimoniauxRemarquables_14 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_SitesPatrimoniauxRemarquables_14, 
                style: style_SitesPatrimoniauxRemarquables_14,
                popuplayertitle: 'Sites Patrimoniaux Remarquables',
                interactive: true,
                title: '<img src="styles/legend/SitesPatrimoniauxRemarquables_14.png" /> Sites Patrimoniaux Remarquables'
            });
var format_Sitesclasss_15 = new ol.format.GeoJSON();
var features_Sitesclasss_15 = format_Sitesclasss_15.readFeatures(json_Sitesclasss_15, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Sitesclasss_15 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Sitesclasss_15.addFeatures(features_Sitesclasss_15);
var lyr_Sitesclasss_15 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Sitesclasss_15, 
                style: style_Sitesclasss_15,
                popuplayertitle: 'Sites classés',
                interactive: true,
                title: '<img src="styles/legend/Sitesclasss_15.png" /> Sites classés'
            });
var format_Sitesinscrits_16 = new ol.format.GeoJSON();
var features_Sitesinscrits_16 = format_Sitesinscrits_16.readFeatures(json_Sitesinscrits_16, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Sitesinscrits_16 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Sitesinscrits_16.addFeatures(features_Sitesinscrits_16);
var lyr_Sitesinscrits_16 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Sitesinscrits_16, 
                style: style_Sitesinscrits_16,
                popuplayertitle: 'Sites inscrits',
                interactive: true,
                title: '<img src="styles/legend/Sitesinscrits_16.png" /> Sites inscrits'
            });
var format_Immeublesclasssouinscrits_17 = new ol.format.GeoJSON();
var features_Immeublesclasssouinscrits_17 = format_Immeublesclasssouinscrits_17.readFeatures(json_Immeublesclasssouinscrits_17, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Immeublesclasssouinscrits_17 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Immeublesclasssouinscrits_17.addFeatures(features_Immeublesclasssouinscrits_17);
var lyr_Immeublesclasssouinscrits_17 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Immeublesclasssouinscrits_17, 
                style: style_Immeublesclasssouinscrits_17,
                popuplayertitle: 'Immeubles classés ou inscrits',
                interactive: true,
                title: '<img src="styles/legend/Immeublesclasssouinscrits_17.png" /> Immeubles classés ou inscrits'
            });
var format_ZNIEFFtype2_18 = new ol.format.GeoJSON();
var features_ZNIEFFtype2_18 = format_ZNIEFFtype2_18.readFeatures(json_ZNIEFFtype2_18, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ZNIEFFtype2_18 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ZNIEFFtype2_18.addFeatures(features_ZNIEFFtype2_18);
var lyr_ZNIEFFtype2_18 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ZNIEFFtype2_18, 
                style: style_ZNIEFFtype2_18,
                popuplayertitle: 'ZNIEFF type 2',
                interactive: false,
                title: '<img src="styles/legend/ZNIEFFtype2_18.png" /> ZNIEFF type 2'
            });
var format_ZNIEFFtype1_19 = new ol.format.GeoJSON();
var features_ZNIEFFtype1_19 = format_ZNIEFFtype1_19.readFeatures(json_ZNIEFFtype1_19, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ZNIEFFtype1_19 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ZNIEFFtype1_19.addFeatures(features_ZNIEFFtype1_19);
var lyr_ZNIEFFtype1_19 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ZNIEFFtype1_19, 
                style: style_ZNIEFFtype1_19,
                popuplayertitle: 'ZNIEFF type 1',
                interactive: false,
                title: '<img src="styles/legend/ZNIEFFtype1_19.png" /> ZNIEFF type 1'
            });
var format_Zoneshumides_20 = new ol.format.GeoJSON();
var features_Zoneshumides_20 = format_Zoneshumides_20.readFeatures(json_Zoneshumides_20, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Zoneshumides_20 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Zoneshumides_20.addFeatures(features_Zoneshumides_20);
var lyr_Zoneshumides_20 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Zoneshumides_20, 
                style: style_Zoneshumides_20,
                popuplayertitle: 'Zones humides',
                interactive: false,
                title: '<img src="styles/legend/Zoneshumides_20.png" /> Zones humides'
            });
var format_Natura2000_21 = new ol.format.GeoJSON();
var features_Natura2000_21 = format_Natura2000_21.readFeatures(json_Natura2000_21, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Natura2000_21 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Natura2000_21.addFeatures(features_Natura2000_21);
var lyr_Natura2000_21 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Natura2000_21, 
                style: style_Natura2000_21,
                popuplayertitle: 'Natura 2000',
                interactive: false,
                title: '<img src="styles/legend/Natura2000_21.png" /> Natura 2000'
            });
var format_Niveaudurisque_22 = new ol.format.GeoJSON();
var features_Niveaudurisque_22 = format_Niveaudurisque_22.readFeatures(json_Niveaudurisque_22, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Niveaudurisque_22 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Niveaudurisque_22.addFeatures(features_Niveaudurisque_22);
var lyr_Niveaudurisque_22 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Niveaudurisque_22, 
                style: style_Niveaudurisque_22,
                popuplayertitle: 'Niveau du risque',
                interactive: false,
    title: 'Niveau du risque<br />\
    <img src="styles/legend/Niveaudurisque_22_0.png" /> Faible<br />\
    <img src="styles/legend/Niveaudurisque_22_1.png" /> Moyen<br />\
    <img src="styles/legend/Niveaudurisque_22_2.png" /> Fort<br />' });
var format_Zonesimpermables_23 = new ol.format.GeoJSON();
var features_Zonesimpermables_23 = format_Zonesimpermables_23.readFeatures(json_Zonesimpermables_23, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Zonesimpermables_23 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Zonesimpermables_23.addFeatures(features_Zonesimpermables_23);
var lyr_Zonesimpermables_23 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Zonesimpermables_23, 
                style: style_Zonesimpermables_23,
                popuplayertitle: 'Zones imperméables',
                interactive: false,
                title: '<img src="styles/legend/Zonesimpermables_23.png" /> Zones imperméables'
            });
var format_Zonespotentiellementsujettesauxinondations_24 = new ol.format.GeoJSON();
var features_Zonespotentiellementsujettesauxinondations_24 = format_Zonespotentiellementsujettesauxinondations_24.readFeatures(json_Zonespotentiellementsujettesauxinondations_24, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Zonespotentiellementsujettesauxinondations_24 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Zonespotentiellementsujettesauxinondations_24.addFeatures(features_Zonespotentiellementsujettesauxinondations_24);
var lyr_Zonespotentiellementsujettesauxinondations_24 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Zonespotentiellementsujettesauxinondations_24, 
                style: style_Zonespotentiellementsujettesauxinondations_24,
                popuplayertitle: 'Zones potentiellement sujettes aux inondations',
                interactive: false,
                title: '<img src="styles/legend/Zonespotentiellementsujettesauxinondations_24.png" /> Zones potentiellement sujettes aux inondations'
            });
var format_Zonespotentiellementsujettesauxdbordements_25 = new ol.format.GeoJSON();
var features_Zonespotentiellementsujettesauxdbordements_25 = format_Zonespotentiellementsujettesauxdbordements_25.readFeatures(json_Zonespotentiellementsujettesauxdbordements_25, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Zonespotentiellementsujettesauxdbordements_25 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Zonespotentiellementsujettesauxdbordements_25.addFeatures(features_Zonespotentiellementsujettesauxdbordements_25);
var lyr_Zonespotentiellementsujettesauxdbordements_25 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Zonespotentiellementsujettesauxdbordements_25, 
                style: style_Zonespotentiellementsujettesauxdbordements_25,
                popuplayertitle: 'Zones potentiellement sujettes aux débordements',
                interactive: false,
                title: '<img src="styles/legend/Zonespotentiellementsujettesauxdbordements_25.png" /> Zones potentiellement sujettes aux débordements'
            });
var format_Cimetire_26 = new ol.format.GeoJSON();
var features_Cimetire_26 = format_Cimetire_26.readFeatures(json_Cimetire_26, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Cimetire_26 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Cimetire_26.addFeatures(features_Cimetire_26);
var lyr_Cimetire_26 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Cimetire_26, 
                style: style_Cimetire_26,
                popuplayertitle: 'Cimetière',
                interactive: true,
                title: '<img src="styles/legend/Cimetire_26.png" /> Cimetière'
            });
var format_Rservoir_27 = new ol.format.GeoJSON();
var features_Rservoir_27 = format_Rservoir_27.readFeatures(json_Rservoir_27, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Rservoir_27 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Rservoir_27.addFeatures(features_Rservoir_27);
var lyr_Rservoir_27 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Rservoir_27, 
                style: style_Rservoir_27,
                popuplayertitle: 'Réservoir',
                interactive: true,
                title: '<img src="styles/legend/Rservoir_27.png" /> Réservoir'
            });
var format_Terraindesport_28 = new ol.format.GeoJSON();
var features_Terraindesport_28 = format_Terraindesport_28.readFeatures(json_Terraindesport_28, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Terraindesport_28 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Terraindesport_28.addFeatures(features_Terraindesport_28);
var lyr_Terraindesport_28 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Terraindesport_28, 
                style: style_Terraindesport_28,
                popuplayertitle: 'Terrain de sport',
                interactive: true,
                title: '<img src="styles/legend/Terraindesport_28.png" /> Terrain de sport'
            });
var format_Monument_29 = new ol.format.GeoJSON();
var features_Monument_29 = format_Monument_29.readFeatures(json_Monument_29, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Monument_29 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Monument_29.addFeatures(features_Monument_29);
var lyr_Monument_29 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Monument_29, 
                style: style_Monument_29,
                popuplayertitle: 'Monument',
                interactive: true,
                title: '<img src="styles/legend/Monument_29.png" /> Monument'
            });
var format_Indiffrenci_30 = new ol.format.GeoJSON();
var features_Indiffrenci_30 = format_Indiffrenci_30.readFeatures(json_Indiffrenci_30, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Indiffrenci_30 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Indiffrenci_30.addFeatures(features_Indiffrenci_30);
var lyr_Indiffrenci_30 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Indiffrenci_30, 
                style: style_Indiffrenci_30,
                popuplayertitle: 'Indifférencié',
                interactive: true,
                title: '<img src="styles/legend/Indiffrenci_30.png" /> Indifférencié'
            });
var format_Industrielagricoleoucommercial_31 = new ol.format.GeoJSON();
var features_Industrielagricoleoucommercial_31 = format_Industrielagricoleoucommercial_31.readFeatures(json_Industrielagricoleoucommercial_31, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Industrielagricoleoucommercial_31 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Industrielagricoleoucommercial_31.addFeatures(features_Industrielagricoleoucommercial_31);
var lyr_Industrielagricoleoucommercial_31 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Industrielagricoleoucommercial_31, 
                style: style_Industrielagricoleoucommercial_31,
                popuplayertitle: 'Industriel, agricole ou commercial',
                interactive: true,
                title: '<img src="styles/legend/Industrielagricoleoucommercial_31.png" /> Industriel, agricole ou commercial'
            });
var format_Constructionsponctuelles_32 = new ol.format.GeoJSON();
var features_Constructionsponctuelles_32 = format_Constructionsponctuelles_32.readFeatures(json_Constructionsponctuelles_32, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Constructionsponctuelles_32 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Constructionsponctuelles_32.addFeatures(features_Constructionsponctuelles_32);
var lyr_Constructionsponctuelles_32 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Constructionsponctuelles_32, 
                style: style_Constructionsponctuelles_32,
                popuplayertitle: 'Constructions ponctuelles',
                interactive: true,
                title: '<img src="styles/legend/Constructionsponctuelles_32.png" /> Constructions ponctuelles'
            });
var format_Pylne_33 = new ol.format.GeoJSON();
var features_Pylne_33 = format_Pylne_33.readFeatures(json_Pylne_33, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Pylne_33 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Pylne_33.addFeatures(features_Pylne_33);
var lyr_Pylne_33 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Pylne_33, 
                style: style_Pylne_33,
                popuplayertitle: 'Pylône',
                interactive: true,
                title: '<img src="styles/legend/Pylne_33.png" /> Pylône'
            });
var format_SitesBASOL_34 = new ol.format.GeoJSON();
var features_SitesBASOL_34 = format_SitesBASOL_34.readFeatures(json_SitesBASOL_34, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_SitesBASOL_34 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_SitesBASOL_34.addFeatures(features_SitesBASOL_34);
var lyr_SitesBASOL_34 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_SitesBASOL_34, 
                style: style_SitesBASOL_34,
                popuplayertitle: 'Sites BASOL',
                interactive: true,
                title: '<img src="styles/legend/SitesBASOL_34.png" /> Sites BASOL'
            });
var format_SitesCASIAS_35 = new ol.format.GeoJSON();
var features_SitesCASIAS_35 = format_SitesCASIAS_35.readFeatures(json_SitesCASIAS_35, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_SitesCASIAS_35 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_SitesCASIAS_35.addFeatures(features_SitesCASIAS_35);
var lyr_SitesCASIAS_35 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_SitesCASIAS_35, 
                style: style_SitesCASIAS_35,
                popuplayertitle: 'Sites CASIAS',
                interactive: true,
                title: '<img src="styles/legend/SitesCASIAS_35.png" /> Sites CASIAS'
            });
var format_ICPE_36 = new ol.format.GeoJSON();
var features_ICPE_36 = format_ICPE_36.readFeatures(json_ICPE_36, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ICPE_36 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ICPE_36.addFeatures(features_ICPE_36);
var lyr_ICPE_36 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ICPE_36, 
                style: style_ICPE_36,
                popuplayertitle: 'ICPE',
                interactive: true,
                title: '<img src="styles/legend/ICPE_36.png" /> ICPE'
            });
var format_Naturedelaroute_37 = new ol.format.GeoJSON();
var features_Naturedelaroute_37 = format_Naturedelaroute_37.readFeatures(json_Naturedelaroute_37, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Naturedelaroute_37 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Naturedelaroute_37.addFeatures(features_Naturedelaroute_37);
var lyr_Naturedelaroute_37 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Naturedelaroute_37, 
                style: style_Naturedelaroute_37,
                popuplayertitle: 'Nature de la route',
                interactive: true,
    title: 'Nature de la route<br />\
    <img src="styles/legend/Naturedelaroute_37_0.png" /> Type autoroutier<br />\
    <img src="styles/legend/Naturedelaroute_37_1.png" /> Bretelle<br />\
    <img src="styles/legend/Naturedelaroute_37_2.png" /> Route à 2 chaussées<br />\
    <img src="styles/legend/Naturedelaroute_37_3.png" /> Chemin<br />\
    <img src="styles/legend/Naturedelaroute_37_4.png" /> Escalier<br />\
    <img src="styles/legend/Naturedelaroute_37_5.png" /> Rond-point<br />\
    <img src="styles/legend/Naturedelaroute_37_6.png" /> Route empierrée<br />\
    <img src="styles/legend/Naturedelaroute_37_7.png" /> Route à 1 chaussée<br />\
    <img src="styles/legend/Naturedelaroute_37_8.png" /> Sentier<br />' });
var format_Communesassociesoudlgues_38 = new ol.format.GeoJSON();
var features_Communesassociesoudlgues_38 = format_Communesassociesoudlgues_38.readFeatures(json_Communesassociesoudlgues_38, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Communesassociesoudlgues_38 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Communesassociesoudlgues_38.addFeatures(features_Communesassociesoudlgues_38);
var lyr_Communesassociesoudlgues_38 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Communesassociesoudlgues_38, 
                style: style_Communesassociesoudlgues_38,
                popuplayertitle: 'Communes associées ou déléguées',
                interactive: false,
                title: '<img src="styles/legend/Communesassociesoudlgues_38.png" /> Communes associées ou déléguées'
            });
var format_Communes_39 = new ol.format.GeoJSON();
var features_Communes_39 = format_Communes_39.readFeatures(json_Communes_39, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Communes_39 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Communes_39.addFeatures(features_Communes_39);
var lyr_Communes_39 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Communes_39, 
                style: style_Communes_39,
                popuplayertitle: 'Communes',
                interactive: false,
                title: '<img src="styles/legend/Communes_39.png" /> Communes'
            });
var format_PETRduPaysdeBray_40 = new ol.format.GeoJSON();
var features_PETRduPaysdeBray_40 = format_PETRduPaysdeBray_40.readFeatures(json_PETRduPaysdeBray_40, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_PETRduPaysdeBray_40 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PETRduPaysdeBray_40.addFeatures(features_PETRduPaysdeBray_40);
var lyr_PETRduPaysdeBray_40 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_PETRduPaysdeBray_40, 
                style: style_PETRduPaysdeBray_40,
                popuplayertitle: 'PETR du Pays de Bray',
                interactive: false,
                title: '<img src="styles/legend/PETRduPaysdeBray_40.png" /> PETR du Pays de Bray'
            });
var format_Normandie_41 = new ol.format.GeoJSON();
var features_Normandie_41 = format_Normandie_41.readFeatures(json_Normandie_41, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Normandie_41 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Normandie_41.addFeatures(features_Normandie_41);
var lyr_Normandie_41 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Normandie_41, 
                style: style_Normandie_41,
                popuplayertitle: 'Normandie',
                interactive: false,
                title: '<img src="styles/legend/Normandie_41.png" /> Normandie'
            });
var format_MasquePETR_42 = new ol.format.GeoJSON();
var features_MasquePETR_42 = format_MasquePETR_42.readFeatures(json_MasquePETR_42, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_MasquePETR_42 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_MasquePETR_42.addFeatures(features_MasquePETR_42);
var lyr_MasquePETR_42 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_MasquePETR_42, 
                style: style_MasquePETR_42,
                popuplayertitle: 'Masque PETR',
                interactive: false,
                title: '<img src="styles/legend/MasquePETR_42.png" /> Masque PETR'
            });
var format_CommunesmembresduPETR_43 = new ol.format.GeoJSON();
var features_CommunesmembresduPETR_43 = format_CommunesmembresduPETR_43.readFeatures(json_CommunesmembresduPETR_43, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_CommunesmembresduPETR_43 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_CommunesmembresduPETR_43.addFeatures(features_CommunesmembresduPETR_43);
var lyr_CommunesmembresduPETR_43 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_CommunesmembresduPETR_43, 
                style: style_CommunesmembresduPETR_43,
                popuplayertitle: 'Communes membres du PETR',
                interactive: false,
                title: '<img src="styles/legend/CommunesmembresduPETR_43.png" /> Communes membres du PETR'
            });
var format_CommunesadhrentesADS_44 = new ol.format.GeoJSON();
var features_CommunesadhrentesADS_44 = format_CommunesadhrentesADS_44.readFeatures(json_CommunesadhrentesADS_44, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_CommunesadhrentesADS_44 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_CommunesadhrentesADS_44.addFeatures(features_CommunesadhrentesADS_44);
var lyr_CommunesadhrentesADS_44 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_CommunesadhrentesADS_44, 
                style: style_CommunesadhrentesADS_44,
                popuplayertitle: 'Communes adhérentes ADS',
                interactive: false,
                title: '<img src="styles/legend/CommunesadhrentesADS_44.png" /> Communes adhérentes ADS'
            });
var format_Nomdescommunes_45 = new ol.format.GeoJSON();
var features_Nomdescommunes_45 = format_Nomdescommunes_45.readFeatures(json_Nomdescommunes_45, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Nomdescommunes_45 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Nomdescommunes_45.addFeatures(features_Nomdescommunes_45);
var lyr_Nomdescommunes_45 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Nomdescommunes_45, 
                style: style_Nomdescommunes_45,
                popuplayertitle: 'Nom des communes',
                interactive: false,
                title: 'Nom des communes'
            });
var group_Habillage = new ol.layer.Group({
                                layers: [lyr_MasquePETR_42,lyr_CommunesmembresduPETR_43,lyr_CommunesadhrentesADS_44,lyr_Nomdescommunes_45,],
                                fold: "open",
                                title: 'Habillage'});
var group_Limitesadministratives = new ol.layer.Group({
                                layers: [lyr_Communesassociesoudlgues_38,lyr_Communes_39,lyr_PETRduPaysdeBray_40,lyr_Normandie_41,],
                                fold: "open",
                                title: 'Limites administratives'});
var group_Cadastre = new ol.layer.Group({
                                layers: [],
                                fold: "open",
                                title: 'Cadastre'});
var group_Rseauroutier = new ol.layer.Group({
                                layers: [lyr_Naturedelaroute_37,],
                                fold: "open",
                                title: 'Réseau routier'});
var group_Risquesindustriels = new ol.layer.Group({
                                layers: [lyr_SitesBASOL_34,lyr_SitesCASIAS_35,lyr_ICPE_36,],
                                fold: "open",
                                title: 'Risques industriels'});
var group_Bti = new ol.layer.Group({
                                layers: [lyr_Cimetire_26,lyr_Rservoir_27,lyr_Terraindesport_28,lyr_Monument_29,lyr_Indiffrenci_30,lyr_Industrielagricoleoucommercial_31,lyr_Constructionsponctuelles_32,lyr_Pylne_33,],
                                fold: "open",
                                title: 'Bâti'});
var group_Remontesdenappe = new ol.layer.Group({
                                layers: [lyr_Zonesimpermables_23,lyr_Zonespotentiellementsujettesauxinondations_24,lyr_Zonespotentiellementsujettesauxdbordements_25,],
                                fold: "open",
                                title: 'Remontées de nappe'});
var group_Retraitgonflementdesargiles = new ol.layer.Group({
                                layers: [lyr_Niveaudurisque_22,],
                                fold: "open",
                                title: 'Retrait-gonflement des argiles'});
var group_Zonagesenvironnementaux = new ol.layer.Group({
                                layers: [lyr_ZNIEFFtype2_18,lyr_ZNIEFFtype1_19,lyr_Zoneshumides_20,lyr_Natura2000_21,],
                                fold: "open",
                                title: 'Zonages environnementaux'});
var group_Patrimoine = new ol.layer.Group({
                                layers: [lyr_SitesauxabordslimitrophesSM_12,lyr_Sitesauxabordsdesmonuments_13,lyr_SitesPatrimoniauxRemarquables_14,lyr_Sitesclasss_15,lyr_Sitesinscrits_16,lyr_Immeublesclasssouinscrits_17,],
                                fold: "open",
                                title: 'Patrimoine'});
var group_Archologie = new ol.layer.Group({
                                layers: [lyr_EA_11,],
                                fold: "open",
                                title: 'Archéologie'});
var group_PLUFerriresenBray = new ol.layer.Group({
                                layers: [lyr_Secteurs_6,lyr_Prescriptionssurfaciques_7,lyr_Prescriptionslinaires_8,lyr_Prescriptionsponctuelles_9,lyr_Codessecteurs_10,],
                                fold: "open",
                                title: 'PLU Ferrières-en-Bray'});
var group_PLUGournayenBray = new ol.layer.Group({
                                layers: [lyr_Secteurs_1,lyr_Prescriptionssurfaciques_2,lyr_Prescriptionslinaires_3,lyr_Prescriptionsponctuelles_4,lyr_Codessecteurs_5,],
                                fold: "open",
                                title: 'PLU Gournay-en-Bray'});

lyr_BDOrthoIGN_0.setVisible(true);lyr_Secteurs_1.setVisible(true);lyr_Prescriptionssurfaciques_2.setVisible(true);lyr_Prescriptionslinaires_3.setVisible(true);lyr_Prescriptionsponctuelles_4.setVisible(true);lyr_Codessecteurs_5.setVisible(true);lyr_Secteurs_6.setVisible(true);lyr_Prescriptionssurfaciques_7.setVisible(true);lyr_Prescriptionslinaires_8.setVisible(true);lyr_Prescriptionsponctuelles_9.setVisible(true);lyr_Codessecteurs_10.setVisible(true);lyr_EA_11.setVisible(true);lyr_SitesauxabordslimitrophesSM_12.setVisible(true);lyr_Sitesauxabordsdesmonuments_13.setVisible(true);lyr_SitesPatrimoniauxRemarquables_14.setVisible(true);lyr_Sitesclasss_15.setVisible(true);lyr_Sitesinscrits_16.setVisible(true);lyr_Immeublesclasssouinscrits_17.setVisible(true);lyr_ZNIEFFtype2_18.setVisible(true);lyr_ZNIEFFtype1_19.setVisible(true);lyr_Zoneshumides_20.setVisible(true);lyr_Natura2000_21.setVisible(true);lyr_Niveaudurisque_22.setVisible(true);lyr_Zonesimpermables_23.setVisible(true);lyr_Zonespotentiellementsujettesauxinondations_24.setVisible(true);lyr_Zonespotentiellementsujettesauxdbordements_25.setVisible(true);lyr_Cimetire_26.setVisible(true);lyr_Rservoir_27.setVisible(true);lyr_Terraindesport_28.setVisible(true);lyr_Monument_29.setVisible(true);lyr_Indiffrenci_30.setVisible(true);lyr_Industrielagricoleoucommercial_31.setVisible(true);lyr_Constructionsponctuelles_32.setVisible(true);lyr_Pylne_33.setVisible(true);lyr_SitesBASOL_34.setVisible(true);lyr_SitesCASIAS_35.setVisible(true);lyr_ICPE_36.setVisible(true);lyr_Naturedelaroute_37.setVisible(true);lyr_Communesassociesoudlgues_38.setVisible(true);lyr_Communes_39.setVisible(true);lyr_PETRduPaysdeBray_40.setVisible(true);lyr_Normandie_41.setVisible(true);lyr_MasquePETR_42.setVisible(true);lyr_CommunesmembresduPETR_43.setVisible(true);lyr_CommunesadhrentesADS_44.setVisible(true);lyr_Nomdescommunes_45.setVisible(true);
var layersList = [lyr_BDOrthoIGN_0,group_PLUGournayenBray,group_PLUFerriresenBray,group_Archologie,group_Patrimoine,group_Zonagesenvironnementaux,group_Retraitgonflementdesargiles,group_Remontesdenappe,group_Bti,group_Risquesindustriels,group_Rseauroutier,group_Limitesadministratives,group_Habillage];
lyr_Secteurs_1.set('fieldAliases', {'LIBELLE': 'LIBELLE', 'LIBELONG': 'LIBELONG', 'TYPEZONE': 'TYPEZONE', 'NOMFIC': 'NOMFIC', 'URLFIC': 'URLFIC', 'IDURBA': 'IDURBA', 'DATVALID': 'DATVALID', });
lyr_Prescriptionssurfaciques_2.set('fieldAliases', {'LIBELLE': 'LIBELLE', 'TXT': 'TXT', 'TYPEPSC': 'TYPEPSC', 'STYPEPSC': 'STYPEPSC', 'NOMFIC': 'NOMFIC', 'URLFIC': 'URLFIC', 'IDURBA': 'IDURBA', 'DATVALID': 'DATVALID', });
lyr_Prescriptionslinaires_3.set('fieldAliases', {'LIBELLE': 'LIBELLE', 'TXT': 'TXT', 'TYPEPSC': 'TYPEPSC', 'STYPEPSC': 'STYPEPSC', 'NOMFIC': 'NOMFIC', 'URLFIC': 'URLFIC', 'IDURBA': 'IDURBA', 'DATVALID': 'DATVALID', });
lyr_Prescriptionsponctuelles_4.set('fieldAliases', {'LIBELLE': 'LIBELLE', 'TXT': 'TXT', 'TYPEPSC': 'TYPEPSC', 'STYPEPSC': 'STYPEPSC', 'NOMFIC': 'NOMFIC', 'URLFIC': 'URLFIC', 'IDURBA': 'IDURBA', 'DATVALID': 'DATVALID', });
lyr_Codessecteurs_5.set('fieldAliases', {'LIBELLE': 'LIBELLE', 'LIBELONG': 'LIBELONG', 'TYPEZONE': 'TYPEZONE', 'NOMFIC': 'NOMFIC', 'URLFIC': 'URLFIC', 'IDURBA': 'IDURBA', 'DATVALID': 'DATVALID', });
lyr_Secteurs_6.set('fieldAliases', {'LIBELLE': 'LIBELLE', 'LIBELONG': 'LIBELONG', 'TYPEZONE': 'TYPEZONE', 'NOMFIC': 'NOMFIC', 'URLFIC': 'URLFIC', 'IDURBA': 'IDURBA', 'DATVALID': 'DATVALID', });
lyr_Prescriptionssurfaciques_7.set('fieldAliases', {'LIBELLE': 'LIBELLE', 'TXT': 'TXT', 'TYPEPSC': 'TYPEPSC', 'STYPEPSC': 'STYPEPSC', 'NOMFIC': 'NOMFIC', 'URLFIC': 'URLFIC', 'IDURBA': 'IDURBA', 'DATVALID': 'DATVALID', });
lyr_Prescriptionslinaires_8.set('fieldAliases', {'LIBELLE': 'LIBELLE', 'TXT': 'TXT', 'TYPEPSC': 'TYPEPSC', 'STYPEPSC': 'STYPEPSC', 'NOMFIC': 'NOMFIC', 'URLFIC': 'URLFIC', 'IDURBA': 'IDURBA', 'DATVALID': 'DATVALID', });
lyr_Prescriptionsponctuelles_9.set('fieldAliases', {'LIBELLE': 'LIBELLE', 'TXT': 'TXT', 'TYPEPSC': 'TYPEPSC', 'STYPEPSC': 'STYPEPSC', 'NOMFIC': 'NOMFIC', 'URLFIC': 'URLFIC', 'IDURBA': 'IDURBA', 'DATVALID': 'DATVALID', });
lyr_Codessecteurs_10.set('fieldAliases', {'LIBELLE': 'LIBELLE', 'LIBELONG': 'LIBELONG', 'TYPEZONE': 'TYPEZONE', 'NOMFIC': 'NOMFIC', 'URLFIC': 'URLFIC', 'IDURBA': 'IDURBA', 'DATVALID': 'DATVALID', });
lyr_EA_11.set('fieldAliases', {'EA_NATCODE': 'EA_NATCODE', 'COMMUNE_PP': 'COMMUNE_PP', 'NUMORDRE': 'NUMORDRE', 'NUMERO': 'NUMERO', 'NUMERO_DRA': 'NUMERO_DRA', 'NOMUSUEL': 'NOMUSUEL', 'LIEU_IGN': 'LIEU_IGN', 'LIEU_CADAS': 'LIEU_CADAS', 'VESTIGES': 'VESTIGES', 'NATURE_VES': 'NATURE_VES', 'CHRONO_DEB': 'CHRONO_DEB', 'CHRONO_FIN': 'CHRONO_FIN', 'CHRONO_FOU': 'CHRONO_FOU', 'CHRONO_DOU': 'CHRONO_DOU', 'CHRONO_PER': 'CHRONO_PER', 'COMMENT_CH': 'COMMENT_CH', 'NUMERIQUE_': 'NUMERIQUE_', 'NUMERIQU_1': 'NUMERIQU_1', 'CHRONO_D_1': 'CHRONO_D_1', 'X_SAISI': 'X_SAISI', 'Y_SAISI': 'Y_SAISI', 'SURFACE': 'SURFACE', 'PARCELLES': 'PARCELLES', 'INVENTEUR': 'INVENTEUR', 'ANNEE_DECO': 'ANNEE_DECO', 'X_DEGRE': 'X_DEGRE', 'Y_DEGRE': 'Y_DEGRE', 'EMPRISE': 'EMPRISE', 'GEOREFEREN': 'GEOREFEREN', 'GEOMETRIE': 'GEOMETRIE', });
lyr_SitesauxabordslimitrophesSM_12.set('fieldAliases', {'idTigre': 'idTigre', 'idApp': 'idApp', 'appTigre': 'appTigre', 'type': 'type', 'parcelle': 'parcelle', 'appelation': 'appelation', 'categorie': 'categorie', 'localisati': 'localisati', 'ressource': 'ressource', 'evenement': 'evenement', 'legende': 'legende', 'precision': 'precision', 'statut': 'statut', 'maj': 'maj', 'region': 'region', 'departemen': 'departemen', 'commune': 'commune', });
lyr_Sitesauxabordsdesmonuments_13.set('fieldAliases', {'idTigre': 'idTigre', 'idApp': 'idApp', 'appTigre': 'appTigre', 'type': 'type', 'parcelle': 'parcelle', 'appelation': 'appelation', 'categorie': 'categorie', 'localisati': 'localisati', 'ressource': 'ressource', 'evenement': 'evenement', 'legende': 'legende', 'precision': 'precision', 'statut': 'statut', 'maj': 'maj', 'region': 'region', 'departemen': 'departemen', 'commune': 'commune', });
lyr_SitesPatrimoniauxRemarquables_14.set('fieldAliases', {'idTigre': 'idTigre', 'idApp': 'idApp', 'appTigre': 'appTigre', 'type': 'type', 'parcelle': 'parcelle', 'appelation': 'appelation', 'categorie': 'categorie', 'localisati': 'localisati', 'ressource': 'ressource', 'evenement': 'evenement', 'legende': 'legende', 'precision': 'precision', 'statut': 'statut', 'maj': 'maj', 'region': 'region', 'departemen': 'departemen', 'commune': 'commune', });
lyr_Sitesclasss_15.set('fieldAliases', {'idsite': 'idsite', 'idintgest': 'idintgest', 'dep': 'dep', 'nomsite': 'nomsite', 'type': 'type', 'descriptio': 'descriptio', 'nature': 'nature', 'datedecis': 'datedecis', 'datedecisr': 'datedecisr', 'surfoffic': 'surfoffic', 'echnum': 'echnum', 'precision': 'precision', 'srcgeogen': 'srcgeogen', 'datesrcgen': 'datesrcgen', 'surfcalc': 'surfcalc', 'surfmer': 'surfmer', 'urlfiche': 'urlfiche', 'urltxtrgl': 'urltxtrgl', 'urlcarte': 'urlcarte', 'urlcartec': 'urlcartec', 'urlweb': 'urlweb', 'urlcarmen': 'urlcarmen', });
lyr_Sitesinscrits_16.set('fieldAliases', {'idsite': 'idsite', 'idintgest': 'idintgest', 'dep': 'dep', 'nomsite': 'nomsite', 'type': 'type', 'descriptio': 'descriptio', 'nature': 'nature', 'datedecis': 'datedecis', 'datedecisr': 'datedecisr', 'surfoffic': 'surfoffic', 'echnum': 'echnum', 'precision': 'precision', 'srcgeogen': 'srcgeogen', 'datesrcgen': 'datesrcgen', 'surfcalc': 'surfcalc', 'surfmer': 'surfmer', 'urlfiche': 'urlfiche', 'urltxtrgl': 'urltxtrgl', 'urlcarte': 'urlcarte', 'urlcartec': 'urlcartec', 'urlweb': 'urlweb', 'urlcarmen': 'urlcarmen', });
lyr_Immeublesclasssouinscrits_17.set('fieldAliases', {'idTigre': 'idTigre', 'idApp': 'idApp', 'appTigre': 'appTigre', 'type': 'type', 'parcelle': 'parcelle', 'appelation': 'appelation', 'categorie': 'categorie', 'localisati': 'localisati', 'ressource': 'ressource', 'evenement': 'evenement', 'legende': 'legende', 'precision': 'precision', 'statut': 'statut', 'maj': 'maj', 'region': 'region', 'departemen': 'departemen', 'commune': 'commune', });
lyr_ZNIEFFtype2_18.set('fieldAliases', {'NOM_ZNIEFF': 'NOM_ZNIEFF', 'CODE_NATIO': 'CODE_NATIO', 'CODE_REGIO': 'CODE_REGIO', 'SURFACE_HA': 'SURFACE_HA', 'SAISIE_LOG': 'SAISIE_LOG', 'DATE_DE_VA': 'DATE_DE_VA', 'ORGANISME': 'ORGANISME', 'INCLUSION': 'INCLUSION', 'DEPARTEMEN': 'DEPARTEMEN', 'URLFICTECH': 'URLFICTECH', 'URLFICPUB': 'URLFICPUB', 'URLMETAD': 'URLMETAD', });
lyr_ZNIEFFtype1_19.set('fieldAliases', {'NOM_ZNIEFF': 'NOM_ZNIEFF', 'CODE_NATIO': 'CODE_NATIO', 'CODE_REGIO': 'CODE_REGIO', 'SURFACE_HA': 'SURFACE_HA', 'SAISIE_LOG': 'SAISIE_LOG', 'DATE_DE_VA': 'DATE_DE_VA', 'ORGANISME': 'ORGANISME', 'INCLUSION': 'INCLUSION', 'DEPARTEMEN': 'DEPARTEMEN', 'URLFICTECH': 'URLFICTECH', 'URLFICPUB': 'URLFICPUB', 'URLMETAD': 'URLMETAD', });
lyr_Zoneshumides_20.set('fieldAliases', {'LIBELLE': 'LIBELLE', 'URLMETAD': 'URLMETAD', });
lyr_Natura2000_21.set('fieldAliases', {'NOM': 'NOM', });
lyr_Niveaudurisque_22.set('fieldAliases', {'dpt': 'dpt', 'niveau': 'niveau', 'alea': 'alea', });
lyr_Zonesimpermables_23.set('fieldAliases', {'Id': 'Id', });
lyr_Zonespotentiellementsujettesauxinondations_24.set('fieldAliases', {'CLASSE': 'CLASSE', 'gridcode': 'gridcode', 'FIAB_MNT': 'FIAB_MNT', 'FIAB_ESO': 'FIAB_ESO', 'FIAB_TOT': 'FIAB_TOT', 'CLASSEFIAB': 'CLASSEFIAB', });
lyr_Zonespotentiellementsujettesauxdbordements_25.set('fieldAliases', {'CLASSE': 'CLASSE', 'gridcode': 'gridcode', 'FIAB_MNT': 'FIAB_MNT', 'FIAB_ESO': 'FIAB_ESO', 'FIAB_TOT': 'FIAB_TOT', 'CLASSEFIAB': 'CLASSEFIAB', });
lyr_Cimetire_26.set('fieldAliases', {'ID': 'ID', 'NATURE': 'NATURE', 'NAT_DETAIL': 'NAT_DETAIL', 'TOPONYME': 'TOPONYME', 'STATUT_TOP': 'STATUT_TOP', 'IMPORTANCE': 'IMPORTANCE', 'ETAT': 'ETAT', 'DATE_CREAT': 'DATE_CREAT', 'DATE_MAJ': 'DATE_MAJ', 'DATE_APP': 'DATE_APP', 'DATE_CONF': 'DATE_CONF', 'SOURCE': 'SOURCE', 'ID_SOURCE': 'ID_SOURCE', 'ACQU_PLANI': 'ACQU_PLANI', 'PREC_PLANI': 'PREC_PLANI', 'ACQU_ALTI': 'ACQU_ALTI', 'PREC_ALTI': 'PREC_ALTI', });
lyr_Rservoir_27.set('fieldAliases', {'ID': 'ID', 'NATURE': 'NATURE', 'ETAT': 'ETAT', 'DATE_CREAT': 'DATE_CREAT', 'DATE_MAJ': 'DATE_MAJ', 'DATE_APP': 'DATE_APP', 'DATE_CONF': 'DATE_CONF', 'SOURCE': 'SOURCE', 'ID_SOURCE': 'ID_SOURCE', 'ACQU_PLANI': 'ACQU_PLANI', 'PREC_PLANI': 'PREC_PLANI', 'ACQU_ALTI': 'ACQU_ALTI', 'PREC_ALTI': 'PREC_ALTI', 'Z_MIN_SOL': 'Z_MIN_SOL', 'Z_MIN_TOIT': 'Z_MIN_TOIT', 'HAUTEUR': 'HAUTEUR', 'Z_MAX_TOIT': 'Z_MAX_TOIT', 'Z_MAX_SOL': 'Z_MAX_SOL', 'ORIGIN_BAT': 'ORIGIN_BAT', 'VOLUME': 'VOLUME', });
lyr_Terraindesport_28.set('fieldAliases', {'ID': 'ID', 'NATURE': 'NATURE', 'NAT_DETAIL': 'NAT_DETAIL', 'ETAT': 'ETAT', 'DATE_CREAT': 'DATE_CREAT', 'DATE_MAJ': 'DATE_MAJ', 'DATE_APP': 'DATE_APP', 'DATE_CONF': 'DATE_CONF', 'SOURCE': 'SOURCE', 'ID_SOURCE': 'ID_SOURCE', 'ACQU_PLANI': 'ACQU_PLANI', 'PREC_PLANI': 'PREC_PLANI', 'ACQU_ALTI': 'ACQU_ALTI', 'PREC_ALTI': 'PREC_ALTI', });
lyr_Monument_29.set('fieldAliases', {'ID': 'ID', 'NATURE': 'NATURE', 'USAGE1': 'USAGE1', 'USAGE2': 'USAGE2', 'LEGER': 'LEGER', 'ETAT': 'ETAT', 'DATE_CREAT': 'DATE_CREAT', 'DATE_MAJ': 'DATE_MAJ', 'DATE_APP': 'DATE_APP', 'DATE_CONF': 'DATE_CONF', 'SOURCE': 'SOURCE', 'ID_SOURCE': 'ID_SOURCE', 'ACQU_PLANI': 'ACQU_PLANI', 'ACQU_ALTI': 'ACQU_ALTI', 'PREC_PLANI': 'PREC_PLANI', 'PREC_ALTI': 'PREC_ALTI', 'NB_LOGTS': 'NB_LOGTS', 'NB_ETAGES': 'NB_ETAGES', 'MAT_MURS': 'MAT_MURS', 'MAT_TOITS': 'MAT_TOITS', 'HAUTEUR': 'HAUTEUR', 'Z_MIN_SOL': 'Z_MIN_SOL', 'Z_MIN_TOIT': 'Z_MIN_TOIT', 'Z_MAX_TOIT': 'Z_MAX_TOIT', 'Z_MAX_SOL': 'Z_MAX_SOL', 'ORIGIN_BAT': 'ORIGIN_BAT', 'APP_FF': 'APP_FF', 'IDS_RNB': 'IDS_RNB', });
lyr_Indiffrenci_30.set('fieldAliases', {'ID': 'ID', 'NATURE': 'NATURE', 'USAGE1': 'USAGE1', 'USAGE2': 'USAGE2', 'LEGER': 'LEGER', 'ETAT': 'ETAT', 'DATE_CREAT': 'DATE_CREAT', 'DATE_MAJ': 'DATE_MAJ', 'DATE_APP': 'DATE_APP', 'DATE_CONF': 'DATE_CONF', 'SOURCE': 'SOURCE', 'ID_SOURCE': 'ID_SOURCE', 'ACQU_PLANI': 'ACQU_PLANI', 'ACQU_ALTI': 'ACQU_ALTI', 'PREC_PLANI': 'PREC_PLANI', 'PREC_ALTI': 'PREC_ALTI', 'NB_LOGTS': 'NB_LOGTS', 'NB_ETAGES': 'NB_ETAGES', 'MAT_MURS': 'MAT_MURS', 'MAT_TOITS': 'MAT_TOITS', 'HAUTEUR': 'HAUTEUR', 'Z_MIN_SOL': 'Z_MIN_SOL', 'Z_MIN_TOIT': 'Z_MIN_TOIT', 'Z_MAX_TOIT': 'Z_MAX_TOIT', 'Z_MAX_SOL': 'Z_MAX_SOL', 'ORIGIN_BAT': 'ORIGIN_BAT', 'APP_FF': 'APP_FF', 'IDS_RNB': 'IDS_RNB', });
lyr_Industrielagricoleoucommercial_31.set('fieldAliases', {'ID': 'ID', 'NATURE': 'NATURE', 'USAGE1': 'USAGE1', 'USAGE2': 'USAGE2', 'LEGER': 'LEGER', 'ETAT': 'ETAT', 'DATE_CREAT': 'DATE_CREAT', 'DATE_MAJ': 'DATE_MAJ', 'DATE_APP': 'DATE_APP', 'DATE_CONF': 'DATE_CONF', 'SOURCE': 'SOURCE', 'ID_SOURCE': 'ID_SOURCE', 'ACQU_PLANI': 'ACQU_PLANI', 'ACQU_ALTI': 'ACQU_ALTI', 'PREC_PLANI': 'PREC_PLANI', 'PREC_ALTI': 'PREC_ALTI', 'NB_LOGTS': 'NB_LOGTS', 'NB_ETAGES': 'NB_ETAGES', 'MAT_MURS': 'MAT_MURS', 'MAT_TOITS': 'MAT_TOITS', 'HAUTEUR': 'HAUTEUR', 'Z_MIN_SOL': 'Z_MIN_SOL', 'Z_MIN_TOIT': 'Z_MIN_TOIT', 'Z_MAX_TOIT': 'Z_MAX_TOIT', 'Z_MAX_SOL': 'Z_MAX_SOL', 'ORIGIN_BAT': 'ORIGIN_BAT', 'APP_FF': 'APP_FF', 'IDS_RNB': 'IDS_RNB', });
lyr_Constructionsponctuelles_32.set('fieldAliases', {'ID': 'ID', 'NATURE': 'NATURE', 'NAT_DETAIL': 'NAT_DETAIL', 'TOPONYME': 'TOPONYME', 'STATUT_TOP': 'STATUT_TOP', 'IMPORTANCE': 'IMPORTANCE', 'ETAT': 'ETAT', 'DATE_CREAT': 'DATE_CREAT', 'DATE_MAJ': 'DATE_MAJ', 'DATE_APP': 'DATE_APP', 'DATE_CONF': 'DATE_CONF', 'SOURCE': 'SOURCE', 'ID_SOURCE': 'ID_SOURCE', 'ACQU_PLANI': 'ACQU_PLANI', 'PREC_PLANI': 'PREC_PLANI', 'ACQU_ALTI': 'ACQU_ALTI', 'PREC_ALTI': 'PREC_ALTI', 'HAUTEUR': 'HAUTEUR', });
lyr_Pylne_33.set('fieldAliases', {'ID': 'ID', 'ETAT': 'ETAT', 'DATE_CREAT': 'DATE_CREAT', 'DATE_MAJ': 'DATE_MAJ', 'DATE_APP': 'DATE_APP', 'DATE_CONF': 'DATE_CONF', 'SOURCE': 'SOURCE', 'ID_SOURCE': 'ID_SOURCE', 'ACQU_PLANI': 'ACQU_PLANI', 'PREC_PLANI': 'PREC_PLANI', 'ACQU_ALTI': 'ACQU_ALTI', 'PREC_ALTI': 'PREC_ALTI', 'HAUTEUR': 'HAUTEUR', });
lyr_SitesBASOL_34.set('fieldAliases', {'cd_metier': 'cd_metier', 'autre_id': 'autre_id', 'nom_etab': 'nom_etab', 'nom_instr': 'nom_instr', 'code_siret': 'code_siret', 'stat_instr': 'stat_instr', 'date_debut': 'date_debut', 'date_fin': 'date_fin', 'descript': 'descript', 'code_insee': 'code_insee', 'nom_com': 'nom_com', 'x_wgs84': 'x_wgs84', 'y_wgs84': 'y_wgs84', 'code_dpt': 'code_dpt', 'nom_dpt': 'nom_dpt', 'code_reg': 'code_reg', 'nom_reg': 'nom_reg', 'act_nafv2': 'act_nafv2', 'act_naf': 'act_naf', 'act_icpe': 'act_icpe', 'act_nafv1': 'act_nafv1', });
lyr_SitesCASIAS_35.set('fieldAliases', {'code_metie': 'code_metie', 'nom_invent': 'nom_invent', 'code_inven': 'code_inven', 'nom_etabli': 'nom_etabli', 'code_siret': 'code_siret', 'adresse': 'adresse', 'code_posta': 'code_posta', 'code_insee': 'code_insee', 'nom_commun': 'nom_commun', 'code_depar': 'code_depar', 'nom_depart': 'nom_depart', 'code_regio': 'code_regio', 'nom_region': 'nom_region', 'etat_activ': 'etat_activ', 'activite_p': 'activite_p', 'nature_loc': 'nature_loc', 'x_wgs84': 'x_wgs84', 'y_wgs84': 'y_wgs84', 'fiche_risq': 'fiche_risq', });
lyr_ICPE_36.set('fieldAliases', {'code_aiot': 'code_aiot', 'x': 'x', 'y': 'y', 'code_epsg': 'code_epsg', 'nom_ets': 'nom_ets', 'num_dep': 'num_dep', 'adresse': 'adresse', 'cd_insee': 'cd_insee', 'cd_postal': 'cd_postal', 'commune': 'commune', 'code_naf': 'code_naf', 'lib_naf': 'lib_naf', 'num_siret': 'num_siret', 'cd_regime': 'cd_regime', 'lib_regime': 'lib_regime', 'seveso': 'seveso', 'lib_seveso': 'lib_seveso', 'bovins': 'bovins', 'porcs': 'porcs', 'volailles': 'volailles', 'carriere': 'carriere', 'eolienne': 'eolienne', 'industrie': 'industrie', 'ied': 'ied', 'priorite_n': 'priorite_n', 'url_fiche': 'url_fiche', });
lyr_Naturedelaroute_37.set('fieldAliases', {'ID': 'ID', 'NATURE': 'NATURE', 'NOM_COLL_G': 'NOM_COLL_G', 'NOM_COLL_D': 'NOM_COLL_D', 'IMPORTANCE': 'IMPORTANCE', 'FICTIF': 'FICTIF', 'POS_SOL': 'POS_SOL', 'ETAT': 'ETAT', 'DATE_CREAT': 'DATE_CREAT', 'DATE_MAJ': 'DATE_MAJ', 'DATE_APP': 'DATE_APP', 'DATE_CONF': 'DATE_CONF', 'SOURCE': 'SOURCE', 'ID_SOURCE': 'ID_SOURCE', 'ACQU_PLANI': 'ACQU_PLANI', 'PREC_PLANI': 'PREC_PLANI', 'ACQU_ALTI': 'ACQU_ALTI', 'PREC_ALTI': 'PREC_ALTI', 'NB_VOIES': 'NB_VOIES', 'LARGEUR': 'LARGEUR', 'IT_VERT': 'IT_VERT', 'PRIVE': 'PRIVE', 'SENS': 'SENS', 'BUS': 'BUS', 'URBAIN': 'URBAIN', 'VIT_MOY_VL': 'VIT_MOY_VL', 'ACCES_VL': 'ACCES_VL', 'ACCES_PED': 'ACCES_PED', 'FERMETURE': 'FERMETURE', 'NAT_RESTR': 'NAT_RESTR', 'RESTR_H': 'RESTR_H', 'RESTR_P': 'RESTR_P', 'RESTR_PPE': 'RESTR_PPE', 'RESTR_LAR': 'RESTR_LAR', 'RESTR_LON': 'RESTR_LON', 'RESTR_MAT': 'RESTR_MAT', 'BORNEDEB_G': 'BORNEDEB_G', 'BORNEDEB_D': 'BORNEDEB_D', 'BORNEFIN_G': 'BORNEFIN_G', 'BORNEFIN_D': 'BORNEFIN_D', 'INSEECOM_G': 'INSEECOM_G', 'INSEECOM_D': 'INSEECOM_D', 'ALIAS_G': 'ALIAS_G', 'ALIAS_D': 'ALIAS_D', 'DATE_SERV': 'DATE_SERV', 'ID_RN': 'ID_RN', 'ID_ITI': 'ID_ITI', 'NUMERO': 'NUMERO', 'NUM_EUROP': 'NUM_EUROP', 'CL_ADMIN': 'CL_ADMIN', 'GESTION': 'GESTION', 'TOPONYME': 'TOPONYME', 'ITI_CYCL': 'ITI_CYCL', 'VOIE_VERTE': 'VOIE_VERTE', 'NATURE_ITI': 'NATURE_ITI', 'NOM_ITI': 'NOM_ITI', 'DELESTAGE': 'DELESTAGE', 'SRC_BAN_G': 'SRC_BAN_G', 'SRC_BAN_D': 'SRC_BAN_D', 'NOM_BAN_G': 'NOM_BAN_G', 'NOM_BAN_D': 'NOM_BAN_D', 'LD_BAN_G': 'LD_BAN_G', 'LD_BAN_D': 'LD_BAN_D', 'ID_BAN_G': 'ID_BAN_G', 'ID_BAN_D': 'ID_BAN_D', 'SENS_CYC_G': 'SENS_CYC_G', 'SENS_CYC_D': 'SENS_CYC_D', 'CYCLABLE_G': 'CYCLABLE_G', 'CYCLABLE_D': 'CYCLABLE_D', 'RETOURDFCI': 'RETOURDFCI', 'GAB_DFCI': 'GAB_DFCI', 'IMPAS_DFCI': 'IMPAS_DFCI', 'NDET_DFCI': 'NDET_DFCI', 'OALIM_DFCI': 'OALIM_DFCI', 'PTMAX_DFCI': 'PTMAX_DFCI', 'PISTE_DFCI': 'PISTE_DFCI', 'DFCI_DEBRO': 'DFCI_DEBRO', 'DFCI_FOSSE': 'DFCI_FOSSE', 'SENS_DFCI': 'SENS_DFCI', 'TERR_DFCI': 'TERR_DFCI', 'VIT_DFCI': 'VIT_DFCI', 'CROIS_DFCI': 'CROIS_DFCI', 'CAT_DFCI': 'CAT_DFCI', });
lyr_Communesassociesoudlgues_38.set('fieldAliases', {'ID': 'ID', 'INSEE_CAD': 'INSEE_CAD', 'INSEE_COM': 'INSEE_COM', 'NATURE': 'NATURE', 'NOM': 'NOM', 'DATE_CREAT': 'DATE_CREAT', 'DATE_MAJ': 'DATE_MAJ', 'DATE_APP': 'DATE_APP', 'DATE_CONF': 'DATE_CONF', 'CODE_POST': 'CODE_POST', 'ID_CH_LIEU': 'ID_CH_LIEU', 'ID_AUT_ADM': 'ID_AUT_ADM', 'POPULATION': 'POPULATION', 'CODE_SIREN': 'CODE_SIREN', });
lyr_Communes_39.set('fieldAliases', {'ID': 'ID', 'INSEE_COM': 'INSEE_COM', 'INSEE_ARR': 'INSEE_ARR', 'INSEE_COL': 'INSEE_COL', 'INSEE_DEP': 'INSEE_DEP', 'INSEE_REG': 'INSEE_REG', 'POPULATION': 'POPULATION', 'SURFACE_HA': 'SURFACE_HA', 'DATE_CREAT': 'DATE_CREAT', 'DATE_MAJ': 'DATE_MAJ', 'DATE_APP': 'DATE_APP', 'DATE_CONF': 'DATE_CONF', 'CODE_POST': 'CODE_POST', 'NOM': 'NOM', 'CL_ARROND': 'CL_ARROND', 'CL_COLLTER': 'CL_COLLTER', 'CL_DEPART': 'CL_DEPART', 'CL_REGION': 'CL_REGION', 'CAPITALE': 'CAPITALE', 'DATE_RCT': 'DATE_RCT', 'RECENSEUR': 'RECENSEUR', 'SIREN_EPCI': 'SIREN_EPCI', 'ID_CH_LIEU': 'ID_CH_LIEU', 'ID_AUT_ADM': 'ID_AUT_ADM', 'CODE_SIREN': 'CODE_SIREN', 'layer': 'layer', 'path': 'path', });
lyr_PETRduPaysdeBray_40.set('fieldAliases', {'ID': 'ID', 'CODE_SIREN': 'CODE_SIREN', 'NATURE': 'NATURE', 'NOM': 'NOM', 'DATE_CREAT': 'DATE_CREAT', 'DATE_MAJ': 'DATE_MAJ', 'DATE_APP': 'DATE_APP', 'DATE_CONF': 'DATE_CONF', 'ID_AUT_ADM': 'ID_AUT_ADM', 'layer': 'layer', 'path': 'path', });
lyr_Normandie_41.set('fieldAliases', {'ID': 'ID', 'INSEE_REG': 'INSEE_REG', 'NOM': 'NOM', 'DATE_CREAT': 'DATE_CREAT', 'DATE_MAJ': 'DATE_MAJ', 'DATE_APP': 'DATE_APP', 'DATE_CONF': 'DATE_CONF', 'ID_AUT_ADM': 'ID_AUT_ADM', 'CODE_SIREN': 'CODE_SIREN', });
lyr_MasquePETR_42.set('fieldAliases', {'id': 'id', });
lyr_CommunesmembresduPETR_43.set('fieldAliases', {'ID': 'ID', 'INSEE_COM': 'INSEE_COM', 'INSEE_ARR': 'INSEE_ARR', 'INSEE_COL': 'INSEE_COL', 'INSEE_DEP': 'INSEE_DEP', 'INSEE_REG': 'INSEE_REG', 'POPULATION': 'POPULATION', 'SURFACE_HA': 'SURFACE_HA', 'DATE_CREAT': 'DATE_CREAT', 'DATE_MAJ': 'DATE_MAJ', 'DATE_APP': 'DATE_APP', 'DATE_CONF': 'DATE_CONF', 'CODE_POST': 'CODE_POST', 'NOM': 'NOM', 'CL_ARROND': 'CL_ARROND', 'CL_COLLTER': 'CL_COLLTER', 'CL_DEPART': 'CL_DEPART', 'CL_REGION': 'CL_REGION', 'CAPITALE': 'CAPITALE', 'DATE_RCT': 'DATE_RCT', 'RECENSEUR': 'RECENSEUR', 'SIREN_EPCI': 'SIREN_EPCI', 'ID_CH_LIEU': 'ID_CH_LIEU', 'ID_AUT_ADM': 'ID_AUT_ADM', 'CODE_SIREN': 'CODE_SIREN', 'layer': 'layer', 'path': 'path', });
lyr_CommunesadhrentesADS_44.set('fieldAliases', {'ID': 'ID', 'INSEE_COM': 'INSEE_COM', 'INSEE_ARR': 'INSEE_ARR', 'INSEE_COL': 'INSEE_COL', 'INSEE_DEP': 'INSEE_DEP', 'INSEE_REG': 'INSEE_REG', 'POPULATION': 'POPULATION', 'SURFACE_HA': 'SURFACE_HA', 'DATE_CREAT': 'DATE_CREAT', 'DATE_MAJ': 'DATE_MAJ', 'DATE_APP': 'DATE_APP', 'DATE_CONF': 'DATE_CONF', 'CODE_POST': 'CODE_POST', 'NOM': 'NOM', 'CL_ARROND': 'CL_ARROND', 'CL_COLLTER': 'CL_COLLTER', 'CL_DEPART': 'CL_DEPART', 'CL_REGION': 'CL_REGION', 'CAPITALE': 'CAPITALE', 'DATE_RCT': 'DATE_RCT', 'RECENSEUR': 'RECENSEUR', 'SIREN_EPCI': 'SIREN_EPCI', 'ID_CH_LIEU': 'ID_CH_LIEU', 'ID_AUT_ADM': 'ID_AUT_ADM', 'CODE_SIREN': 'CODE_SIREN', 'layer': 'layer', 'path': 'path', });
lyr_Nomdescommunes_45.set('fieldAliases', {'ID': 'ID', 'INSEE_COM': 'INSEE_COM', 'INSEE_ARR': 'INSEE_ARR', 'INSEE_COL': 'INSEE_COL', 'INSEE_DEP': 'INSEE_DEP', 'INSEE_REG': 'INSEE_REG', 'POPULATION': 'POPULATION', 'SURFACE_HA': 'SURFACE_HA', 'DATE_CREAT': 'DATE_CREAT', 'DATE_MAJ': 'DATE_MAJ', 'DATE_APP': 'DATE_APP', 'DATE_CONF': 'DATE_CONF', 'CODE_POST': 'CODE_POST', 'NOM': 'NOM', 'CL_ARROND': 'CL_ARROND', 'CL_COLLTER': 'CL_COLLTER', 'CL_DEPART': 'CL_DEPART', 'CL_REGION': 'CL_REGION', 'CAPITALE': 'CAPITALE', 'DATE_RCT': 'DATE_RCT', 'RECENSEUR': 'RECENSEUR', 'SIREN_EPCI': 'SIREN_EPCI', 'ID_CH_LIEU': 'ID_CH_LIEU', 'ID_AUT_ADM': 'ID_AUT_ADM', 'CODE_SIREN': 'CODE_SIREN', 'layer': 'layer', 'path': 'path', });
lyr_Secteurs_1.set('fieldImages', {'LIBELLE': 'TextEdit', 'LIBELONG': 'TextEdit', 'TYPEZONE': 'TextEdit', 'NOMFIC': 'TextEdit', 'URLFIC': 'TextEdit', 'IDURBA': 'TextEdit', 'DATVALID': 'TextEdit', });
lyr_Prescriptionssurfaciques_2.set('fieldImages', {'LIBELLE': 'TextEdit', 'TXT': 'TextEdit', 'TYPEPSC': 'TextEdit', 'STYPEPSC': 'TextEdit', 'NOMFIC': 'TextEdit', 'URLFIC': 'TextEdit', 'IDURBA': 'TextEdit', 'DATVALID': 'TextEdit', });
lyr_Prescriptionslinaires_3.set('fieldImages', {'LIBELLE': 'TextEdit', 'TXT': 'TextEdit', 'TYPEPSC': 'TextEdit', 'STYPEPSC': 'TextEdit', 'NOMFIC': 'TextEdit', 'URLFIC': 'TextEdit', 'IDURBA': 'TextEdit', 'DATVALID': 'TextEdit', });
lyr_Prescriptionsponctuelles_4.set('fieldImages', {'LIBELLE': 'TextEdit', 'TXT': 'TextEdit', 'TYPEPSC': 'TextEdit', 'STYPEPSC': 'TextEdit', 'NOMFIC': 'TextEdit', 'URLFIC': 'TextEdit', 'IDURBA': 'TextEdit', 'DATVALID': 'TextEdit', });
lyr_Codessecteurs_5.set('fieldImages', {'LIBELLE': 'TextEdit', 'LIBELONG': 'TextEdit', 'TYPEZONE': 'TextEdit', 'NOMFIC': 'TextEdit', 'URLFIC': 'TextEdit', 'IDURBA': 'TextEdit', 'DATVALID': 'TextEdit', });
lyr_Secteurs_6.set('fieldImages', {'LIBELLE': 'TextEdit', 'LIBELONG': 'TextEdit', 'TYPEZONE': 'TextEdit', 'NOMFIC': 'TextEdit', 'URLFIC': 'TextEdit', 'IDURBA': 'TextEdit', 'DATVALID': 'DateTime', });
lyr_Prescriptionssurfaciques_7.set('fieldImages', {'LIBELLE': 'TextEdit', 'TXT': 'TextEdit', 'TYPEPSC': 'TextEdit', 'STYPEPSC': 'TextEdit', 'NOMFIC': 'TextEdit', 'URLFIC': 'TextEdit', 'IDURBA': 'TextEdit', 'DATVALID': 'DateTime', });
lyr_Prescriptionslinaires_8.set('fieldImages', {'LIBELLE': 'TextEdit', 'TXT': 'TextEdit', 'TYPEPSC': 'TextEdit', 'STYPEPSC': 'TextEdit', 'NOMFIC': 'TextEdit', 'URLFIC': 'TextEdit', 'IDURBA': 'TextEdit', 'DATVALID': 'DateTime', });
lyr_Prescriptionsponctuelles_9.set('fieldImages', {'LIBELLE': 'TextEdit', 'TXT': 'TextEdit', 'TYPEPSC': 'TextEdit', 'STYPEPSC': 'TextEdit', 'NOMFIC': 'TextEdit', 'URLFIC': 'TextEdit', 'IDURBA': 'TextEdit', 'DATVALID': 'DateTime', });
lyr_Codessecteurs_10.set('fieldImages', {'LIBELLE': 'TextEdit', 'LIBELONG': 'TextEdit', 'TYPEZONE': 'TextEdit', 'NOMFIC': 'TextEdit', 'URLFIC': 'TextEdit', 'IDURBA': 'TextEdit', 'DATVALID': 'TextEdit', });
lyr_EA_11.set('fieldImages', {'EA_NATCODE': 'TextEdit', 'COMMUNE_PP': 'TextEdit', 'NUMORDRE': 'Range', 'NUMERO': 'TextEdit', 'NUMERO_DRA': 'TextEdit', 'NOMUSUEL': 'TextEdit', 'LIEU_IGN': 'TextEdit', 'LIEU_CADAS': 'TextEdit', 'VESTIGES': 'TextEdit', 'NATURE_VES': 'TextEdit', 'CHRONO_DEB': 'TextEdit', 'CHRONO_FIN': 'TextEdit', 'CHRONO_FOU': 'TextEdit', 'CHRONO_DOU': 'TextEdit', 'CHRONO_PER': 'TextEdit', 'COMMENT_CH': 'TextEdit', 'NUMERIQUE_': 'TextEdit', 'NUMERIQU_1': 'TextEdit', 'CHRONO_D_1': 'TextEdit', 'X_SAISI': 'TextEdit', 'Y_SAISI': 'TextEdit', 'SURFACE': 'TextEdit', 'PARCELLES': 'TextEdit', 'INVENTEUR': 'TextEdit', 'ANNEE_DECO': 'Range', 'X_DEGRE': 'TextEdit', 'Y_DEGRE': 'TextEdit', 'EMPRISE': 'TextEdit', 'GEOREFEREN': 'TextEdit', 'GEOMETRIE': 'TextEdit', });
lyr_SitesauxabordslimitrophesSM_12.set('fieldImages', {'idTigre': 'TextEdit', 'idApp': 'TextEdit', 'appTigre': 'TextEdit', 'type': 'TextEdit', 'parcelle': 'TextEdit', 'appelation': 'TextEdit', 'categorie': 'TextEdit', 'localisati': 'TextEdit', 'ressource': 'TextEdit', 'evenement': 'TextEdit', 'legende': 'TextEdit', 'precision': 'TextEdit', 'statut': 'TextEdit', 'maj': 'TextEdit', 'region': 'TextEdit', 'departemen': 'TextEdit', 'commune': 'TextEdit', });
lyr_Sitesauxabordsdesmonuments_13.set('fieldImages', {'idTigre': 'Range', 'idApp': 'TextEdit', 'appTigre': 'Range', 'type': 'TextEdit', 'parcelle': 'TextEdit', 'appelation': 'TextEdit', 'categorie': 'TextEdit', 'localisati': 'TextEdit', 'ressource': 'TextEdit', 'evenement': 'TextEdit', 'legende': 'TextEdit', 'precision': 'TextEdit', 'statut': 'TextEdit', 'maj': 'TextEdit', 'region': 'TextEdit', 'departemen': 'TextEdit', 'commune': 'TextEdit', });
lyr_SitesPatrimoniauxRemarquables_14.set('fieldImages', {'idTigre': 'Range', 'idApp': 'TextEdit', 'appTigre': 'Range', 'type': 'TextEdit', 'parcelle': 'TextEdit', 'appelation': 'TextEdit', 'categorie': 'TextEdit', 'localisati': 'TextEdit', 'ressource': 'TextEdit', 'evenement': 'TextEdit', 'legende': 'TextEdit', 'precision': 'TextEdit', 'statut': 'TextEdit', 'maj': 'TextEdit', 'region': 'TextEdit', 'departemen': 'TextEdit', 'commune': 'TextEdit', });
lyr_Sitesclasss_15.set('fieldImages', {'idsite': 'TextEdit', 'idintgest': 'TextEdit', 'dep': 'TextEdit', 'nomsite': 'TextEdit', 'type': 'TextEdit', 'descriptio': 'TextEdit', 'nature': 'TextEdit', 'datedecis': 'TextEdit', 'datedecisr': 'TextEdit', 'surfoffic': 'TextEdit', 'echnum': 'TextEdit', 'precision': 'TextEdit', 'srcgeogen': 'TextEdit', 'datesrcgen': 'TextEdit', 'surfcalc': 'TextEdit', 'surfmer': 'TextEdit', 'urlfiche': 'TextEdit', 'urltxtrgl': 'TextEdit', 'urlcarte': 'TextEdit', 'urlcartec': 'TextEdit', 'urlweb': 'TextEdit', 'urlcarmen': 'TextEdit', });
lyr_Sitesinscrits_16.set('fieldImages', {'idsite': 'TextEdit', 'idintgest': 'TextEdit', 'dep': 'TextEdit', 'nomsite': 'TextEdit', 'type': 'TextEdit', 'descriptio': 'TextEdit', 'nature': 'TextEdit', 'datedecis': 'TextEdit', 'datedecisr': 'TextEdit', 'surfoffic': 'TextEdit', 'echnum': 'TextEdit', 'precision': 'TextEdit', 'srcgeogen': 'TextEdit', 'datesrcgen': 'TextEdit', 'surfcalc': 'TextEdit', 'surfmer': 'TextEdit', 'urlfiche': 'TextEdit', 'urltxtrgl': 'TextEdit', 'urlcarte': 'TextEdit', 'urlcartec': 'TextEdit', 'urlweb': 'TextEdit', 'urlcarmen': 'TextEdit', });
lyr_Immeublesclasssouinscrits_17.set('fieldImages', {'idTigre': 'Range', 'idApp': 'TextEdit', 'appTigre': 'Range', 'type': 'TextEdit', 'parcelle': 'TextEdit', 'appelation': 'TextEdit', 'categorie': 'TextEdit', 'localisati': 'TextEdit', 'ressource': 'TextEdit', 'evenement': 'TextEdit', 'legende': 'TextEdit', 'precision': 'TextEdit', 'statut': 'TextEdit', 'maj': 'TextEdit', 'region': 'TextEdit', 'departemen': 'TextEdit', 'commune': 'TextEdit', });
lyr_ZNIEFFtype2_18.set('fieldImages', {'NOM_ZNIEFF': 'TextEdit', 'CODE_NATIO': 'TextEdit', 'CODE_REGIO': 'TextEdit', 'SURFACE_HA': 'TextEdit', 'SAISIE_LOG': 'TextEdit', 'DATE_DE_VA': 'DateTime', 'ORGANISME': 'TextEdit', 'INCLUSION': 'TextEdit', 'DEPARTEMEN': 'TextEdit', 'URLFICTECH': 'TextEdit', 'URLFICPUB': 'TextEdit', 'URLMETAD': 'TextEdit', });
lyr_ZNIEFFtype1_19.set('fieldImages', {'NOM_ZNIEFF': 'TextEdit', 'CODE_NATIO': 'TextEdit', 'CODE_REGIO': 'TextEdit', 'SURFACE_HA': 'TextEdit', 'SAISIE_LOG': 'TextEdit', 'DATE_DE_VA': 'DateTime', 'ORGANISME': 'TextEdit', 'INCLUSION': 'TextEdit', 'DEPARTEMEN': 'TextEdit', 'URLFICTECH': 'TextEdit', 'URLFICPUB': 'TextEdit', 'URLMETAD': 'TextEdit', });
lyr_Zoneshumides_20.set('fieldImages', {'LIBELLE': 'TextEdit', 'URLMETAD': 'TextEdit', });
lyr_Natura2000_21.set('fieldImages', {'NOM': 'TextEdit', });
lyr_Niveaudurisque_22.set('fieldImages', {'dpt': 'TextEdit', 'niveau': 'TextEdit', 'alea': 'TextEdit', });
lyr_Zonesimpermables_23.set('fieldImages', {'Id': 'TextEdit', });
lyr_Zonespotentiellementsujettesauxinondations_24.set('fieldImages', {'CLASSE': '', 'gridcode': '', 'FIAB_MNT': '', 'FIAB_ESO': '', 'FIAB_TOT': '', 'CLASSEFIAB': '', });
lyr_Zonespotentiellementsujettesauxdbordements_25.set('fieldImages', {'CLASSE': '', 'gridcode': '', 'FIAB_MNT': '', 'FIAB_ESO': '', 'FIAB_TOT': '', 'CLASSEFIAB': '', });
lyr_Cimetire_26.set('fieldImages', {'ID': 'TextEdit', 'NATURE': 'TextEdit', 'NAT_DETAIL': 'TextEdit', 'TOPONYME': 'TextEdit', 'STATUT_TOP': 'TextEdit', 'IMPORTANCE': 'TextEdit', 'ETAT': 'TextEdit', 'DATE_CREAT': 'TextEdit', 'DATE_MAJ': 'TextEdit', 'DATE_APP': 'DateTime', 'DATE_CONF': 'DateTime', 'SOURCE': 'TextEdit', 'ID_SOURCE': 'TextEdit', 'ACQU_PLANI': 'TextEdit', 'PREC_PLANI': 'TextEdit', 'ACQU_ALTI': 'TextEdit', 'PREC_ALTI': 'TextEdit', });
lyr_Rservoir_27.set('fieldImages', {'ID': 'TextEdit', 'NATURE': 'TextEdit', 'ETAT': 'TextEdit', 'DATE_CREAT': 'TextEdit', 'DATE_MAJ': 'TextEdit', 'DATE_APP': 'DateTime', 'DATE_CONF': 'DateTime', 'SOURCE': 'TextEdit', 'ID_SOURCE': 'TextEdit', 'ACQU_PLANI': 'TextEdit', 'PREC_PLANI': 'TextEdit', 'ACQU_ALTI': 'TextEdit', 'PREC_ALTI': 'TextEdit', 'Z_MIN_SOL': 'TextEdit', 'Z_MIN_TOIT': 'TextEdit', 'HAUTEUR': 'TextEdit', 'Z_MAX_TOIT': 'TextEdit', 'Z_MAX_SOL': 'TextEdit', 'ORIGIN_BAT': 'TextEdit', 'VOLUME': 'TextEdit', });
lyr_Terraindesport_28.set('fieldImages', {'ID': 'TextEdit', 'NATURE': 'TextEdit', 'NAT_DETAIL': 'TextEdit', 'ETAT': 'TextEdit', 'DATE_CREAT': 'TextEdit', 'DATE_MAJ': 'TextEdit', 'DATE_APP': 'DateTime', 'DATE_CONF': 'DateTime', 'SOURCE': 'TextEdit', 'ID_SOURCE': 'TextEdit', 'ACQU_PLANI': 'TextEdit', 'PREC_PLANI': 'TextEdit', 'ACQU_ALTI': 'TextEdit', 'PREC_ALTI': 'TextEdit', });
lyr_Monument_29.set('fieldImages', {'ID': 'TextEdit', 'NATURE': 'TextEdit', 'USAGE1': 'TextEdit', 'USAGE2': 'TextEdit', 'LEGER': 'TextEdit', 'ETAT': 'TextEdit', 'DATE_CREAT': 'TextEdit', 'DATE_MAJ': 'TextEdit', 'DATE_APP': 'DateTime', 'DATE_CONF': 'DateTime', 'SOURCE': 'TextEdit', 'ID_SOURCE': 'TextEdit', 'ACQU_PLANI': 'TextEdit', 'ACQU_ALTI': 'TextEdit', 'PREC_PLANI': 'TextEdit', 'PREC_ALTI': 'TextEdit', 'NB_LOGTS': 'Range', 'NB_ETAGES': 'Range', 'MAT_MURS': 'TextEdit', 'MAT_TOITS': 'TextEdit', 'HAUTEUR': 'TextEdit', 'Z_MIN_SOL': 'TextEdit', 'Z_MIN_TOIT': 'TextEdit', 'Z_MAX_TOIT': 'TextEdit', 'Z_MAX_SOL': 'TextEdit', 'ORIGIN_BAT': 'TextEdit', 'APP_FF': 'TextEdit', 'IDS_RNB': 'TextEdit', });
lyr_Indiffrenci_30.set('fieldImages', {'ID': 'TextEdit', 'NATURE': 'TextEdit', 'USAGE1': 'TextEdit', 'USAGE2': 'TextEdit', 'LEGER': 'TextEdit', 'ETAT': 'TextEdit', 'DATE_CREAT': 'TextEdit', 'DATE_MAJ': 'TextEdit', 'DATE_APP': 'DateTime', 'DATE_CONF': 'DateTime', 'SOURCE': 'TextEdit', 'ID_SOURCE': 'TextEdit', 'ACQU_PLANI': 'TextEdit', 'ACQU_ALTI': 'TextEdit', 'PREC_PLANI': 'TextEdit', 'PREC_ALTI': 'TextEdit', 'NB_LOGTS': 'Range', 'NB_ETAGES': 'Range', 'MAT_MURS': 'TextEdit', 'MAT_TOITS': 'TextEdit', 'HAUTEUR': 'TextEdit', 'Z_MIN_SOL': 'TextEdit', 'Z_MIN_TOIT': 'TextEdit', 'Z_MAX_TOIT': 'TextEdit', 'Z_MAX_SOL': 'TextEdit', 'ORIGIN_BAT': 'TextEdit', 'APP_FF': 'TextEdit', 'IDS_RNB': 'TextEdit', });
lyr_Industrielagricoleoucommercial_31.set('fieldImages', {'ID': 'TextEdit', 'NATURE': 'TextEdit', 'USAGE1': 'TextEdit', 'USAGE2': 'TextEdit', 'LEGER': 'TextEdit', 'ETAT': 'TextEdit', 'DATE_CREAT': 'TextEdit', 'DATE_MAJ': 'TextEdit', 'DATE_APP': 'DateTime', 'DATE_CONF': 'DateTime', 'SOURCE': 'TextEdit', 'ID_SOURCE': 'TextEdit', 'ACQU_PLANI': 'TextEdit', 'ACQU_ALTI': 'TextEdit', 'PREC_PLANI': 'TextEdit', 'PREC_ALTI': 'TextEdit', 'NB_LOGTS': 'Range', 'NB_ETAGES': 'Range', 'MAT_MURS': 'TextEdit', 'MAT_TOITS': 'TextEdit', 'HAUTEUR': 'TextEdit', 'Z_MIN_SOL': 'TextEdit', 'Z_MIN_TOIT': 'TextEdit', 'Z_MAX_TOIT': 'TextEdit', 'Z_MAX_SOL': 'TextEdit', 'ORIGIN_BAT': 'TextEdit', 'APP_FF': 'TextEdit', 'IDS_RNB': 'TextEdit', });
lyr_Constructionsponctuelles_32.set('fieldImages', {'ID': 'TextEdit', 'NATURE': 'TextEdit', 'NAT_DETAIL': 'TextEdit', 'TOPONYME': 'TextEdit', 'STATUT_TOP': 'TextEdit', 'IMPORTANCE': 'TextEdit', 'ETAT': 'TextEdit', 'DATE_CREAT': 'TextEdit', 'DATE_MAJ': 'TextEdit', 'DATE_APP': 'DateTime', 'DATE_CONF': 'DateTime', 'SOURCE': 'TextEdit', 'ID_SOURCE': 'TextEdit', 'ACQU_PLANI': 'TextEdit', 'PREC_PLANI': 'TextEdit', 'ACQU_ALTI': 'TextEdit', 'PREC_ALTI': 'TextEdit', 'HAUTEUR': 'TextEdit', });
lyr_Pylne_33.set('fieldImages', {'ID': 'TextEdit', 'ETAT': 'TextEdit', 'DATE_CREAT': 'TextEdit', 'DATE_MAJ': 'TextEdit', 'DATE_APP': 'DateTime', 'DATE_CONF': 'DateTime', 'SOURCE': 'TextEdit', 'ID_SOURCE': 'TextEdit', 'ACQU_PLANI': 'TextEdit', 'PREC_PLANI': 'TextEdit', 'ACQU_ALTI': 'TextEdit', 'PREC_ALTI': 'TextEdit', 'HAUTEUR': 'TextEdit', });
lyr_SitesBASOL_34.set('fieldImages', {'cd_metier': 'TextEdit', 'autre_id': 'TextEdit', 'nom_etab': 'TextEdit', 'nom_instr': 'TextEdit', 'code_siret': 'TextEdit', 'stat_instr': 'TextEdit', 'date_debut': 'DateTime', 'date_fin': 'DateTime', 'descript': 'TextEdit', 'code_insee': 'TextEdit', 'nom_com': 'TextEdit', 'x_wgs84': 'TextEdit', 'y_wgs84': 'TextEdit', 'code_dpt': 'TextEdit', 'nom_dpt': 'TextEdit', 'code_reg': 'TextEdit', 'nom_reg': 'TextEdit', 'act_nafv2': 'TextEdit', 'act_naf': 'TextEdit', 'act_icpe': 'TextEdit', 'act_nafv1': 'TextEdit', });
lyr_SitesCASIAS_35.set('fieldImages', {'code_metie': 'TextEdit', 'nom_invent': 'TextEdit', 'code_inven': 'TextEdit', 'nom_etabli': 'TextEdit', 'code_siret': 'TextEdit', 'adresse': 'TextEdit', 'code_posta': 'TextEdit', 'code_insee': 'TextEdit', 'nom_commun': 'TextEdit', 'code_depar': 'TextEdit', 'nom_depart': 'TextEdit', 'code_regio': 'TextEdit', 'nom_region': 'TextEdit', 'etat_activ': 'TextEdit', 'activite_p': 'TextEdit', 'nature_loc': 'TextEdit', 'x_wgs84': 'TextEdit', 'y_wgs84': 'TextEdit', 'fiche_risq': 'TextEdit', });
lyr_ICPE_36.set('fieldImages', {'code_aiot': 'TextEdit', 'x': 'TextEdit', 'y': 'TextEdit', 'code_epsg': 'TextEdit', 'nom_ets': 'TextEdit', 'num_dep': 'TextEdit', 'adresse': 'TextEdit', 'cd_insee': 'TextEdit', 'cd_postal': 'TextEdit', 'commune': 'TextEdit', 'code_naf': 'TextEdit', 'lib_naf': 'TextEdit', 'num_siret': 'TextEdit', 'cd_regime': 'TextEdit', 'lib_regime': 'TextEdit', 'seveso': 'TextEdit', 'lib_seveso': 'TextEdit', 'bovins': 'TextEdit', 'porcs': 'TextEdit', 'volailles': 'TextEdit', 'carriere': 'TextEdit', 'eolienne': 'TextEdit', 'industrie': 'TextEdit', 'ied': 'TextEdit', 'priorite_n': 'TextEdit', 'url_fiche': 'TextEdit', });
lyr_Naturedelaroute_37.set('fieldImages', {'ID': 'TextEdit', 'NATURE': 'TextEdit', 'NOM_COLL_G': 'TextEdit', 'NOM_COLL_D': 'TextEdit', 'IMPORTANCE': 'TextEdit', 'FICTIF': 'TextEdit', 'POS_SOL': 'TextEdit', 'ETAT': 'TextEdit', 'DATE_CREAT': 'TextEdit', 'DATE_MAJ': 'TextEdit', 'DATE_APP': 'DateTime', 'DATE_CONF': 'DateTime', 'SOURCE': 'TextEdit', 'ID_SOURCE': 'TextEdit', 'ACQU_PLANI': 'TextEdit', 'PREC_PLANI': 'TextEdit', 'ACQU_ALTI': 'TextEdit', 'PREC_ALTI': 'TextEdit', 'NB_VOIES': 'Range', 'LARGEUR': 'TextEdit', 'IT_VERT': 'TextEdit', 'PRIVE': 'TextEdit', 'SENS': 'TextEdit', 'BUS': 'TextEdit', 'URBAIN': 'TextEdit', 'VIT_MOY_VL': 'Range', 'ACCES_VL': 'TextEdit', 'ACCES_PED': 'TextEdit', 'FERMETURE': 'TextEdit', 'NAT_RESTR': 'TextEdit', 'RESTR_H': 'TextEdit', 'RESTR_P': 'TextEdit', 'RESTR_PPE': 'TextEdit', 'RESTR_LAR': 'TextEdit', 'RESTR_LON': 'TextEdit', 'RESTR_MAT': 'TextEdit', 'BORNEDEB_G': 'TextEdit', 'BORNEDEB_D': 'TextEdit', 'BORNEFIN_G': 'TextEdit', 'BORNEFIN_D': 'TextEdit', 'INSEECOM_G': 'TextEdit', 'INSEECOM_D': 'TextEdit', 'ALIAS_G': 'TextEdit', 'ALIAS_D': 'TextEdit', 'DATE_SERV': 'DateTime', 'ID_RN': 'TextEdit', 'ID_ITI': 'TextEdit', 'NUMERO': 'TextEdit', 'NUM_EUROP': 'TextEdit', 'CL_ADMIN': 'TextEdit', 'GESTION': 'TextEdit', 'TOPONYME': 'TextEdit', 'ITI_CYCL': 'TextEdit', 'VOIE_VERTE': 'TextEdit', 'NATURE_ITI': 'TextEdit', 'NOM_ITI': 'TextEdit', 'DELESTAGE': 'TextEdit', 'SRC_BAN_G': 'TextEdit', 'SRC_BAN_D': 'TextEdit', 'NOM_BAN_G': 'TextEdit', 'NOM_BAN_D': 'TextEdit', 'LD_BAN_G': 'TextEdit', 'LD_BAN_D': 'TextEdit', 'ID_BAN_G': 'TextEdit', 'ID_BAN_D': 'TextEdit', 'SENS_CYC_G': 'TextEdit', 'SENS_CYC_D': 'TextEdit', 'CYCLABLE_G': 'TextEdit', 'CYCLABLE_D': 'TextEdit', 'RETOURDFCI': 'TextEdit', 'GAB_DFCI': 'TextEdit', 'IMPAS_DFCI': 'TextEdit', 'NDET_DFCI': 'TextEdit', 'OALIM_DFCI': 'TextEdit', 'PTMAX_DFCI': 'Range', 'PISTE_DFCI': 'TextEdit', 'DFCI_DEBRO': 'TextEdit', 'DFCI_FOSSE': 'TextEdit', 'SENS_DFCI': 'TextEdit', 'TERR_DFCI': 'TextEdit', 'VIT_DFCI': 'Range', 'CROIS_DFCI': 'TextEdit', 'CAT_DFCI': 'TextEdit', });
lyr_Communesassociesoudlgues_38.set('fieldImages', {'ID': '', 'INSEE_CAD': '', 'INSEE_COM': '', 'NATURE': '', 'NOM': '', 'DATE_CREAT': '', 'DATE_MAJ': '', 'DATE_APP': '', 'DATE_CONF': '', 'CODE_POST': '', 'ID_CH_LIEU': '', 'ID_AUT_ADM': '', 'POPULATION': '', 'CODE_SIREN': '', });
lyr_Communes_39.set('fieldImages', {'ID': 'TextEdit', 'INSEE_COM': 'TextEdit', 'INSEE_ARR': 'TextEdit', 'INSEE_COL': 'TextEdit', 'INSEE_DEP': 'TextEdit', 'INSEE_REG': 'TextEdit', 'POPULATION': 'Range', 'SURFACE_HA': 'Range', 'DATE_CREAT': 'TextEdit', 'DATE_MAJ': 'TextEdit', 'DATE_APP': 'DateTime', 'DATE_CONF': 'DateTime', 'CODE_POST': 'TextEdit', 'NOM': 'TextEdit', 'CL_ARROND': 'TextEdit', 'CL_COLLTER': 'TextEdit', 'CL_DEPART': 'TextEdit', 'CL_REGION': 'TextEdit', 'CAPITALE': 'TextEdit', 'DATE_RCT': 'DateTime', 'RECENSEUR': 'TextEdit', 'SIREN_EPCI': 'TextEdit', 'ID_CH_LIEU': 'TextEdit', 'ID_AUT_ADM': 'TextEdit', 'CODE_SIREN': 'TextEdit', 'layer': '', 'path': '', });
lyr_PETRduPaysdeBray_40.set('fieldImages', {'ID': 'TextEdit', 'CODE_SIREN': 'TextEdit', 'NATURE': 'TextEdit', 'NOM': 'TextEdit', 'DATE_CREAT': 'TextEdit', 'DATE_MAJ': 'TextEdit', 'DATE_APP': 'DateTime', 'DATE_CONF': 'DateTime', 'ID_AUT_ADM': 'TextEdit', 'layer': 'TextEdit', 'path': 'TextEdit', });
lyr_Normandie_41.set('fieldImages', {'ID': '', 'INSEE_REG': '', 'NOM': '', 'DATE_CREAT': '', 'DATE_MAJ': '', 'DATE_APP': '', 'DATE_CONF': '', 'ID_AUT_ADM': '', 'CODE_SIREN': '', });
lyr_MasquePETR_42.set('fieldImages', {'id': 'TextEdit', });
lyr_CommunesmembresduPETR_43.set('fieldImages', {'ID': 'TextEdit', 'INSEE_COM': 'TextEdit', 'INSEE_ARR': 'TextEdit', 'INSEE_COL': 'TextEdit', 'INSEE_DEP': 'TextEdit', 'INSEE_REG': 'TextEdit', 'POPULATION': 'Range', 'SURFACE_HA': 'Range', 'DATE_CREAT': 'TextEdit', 'DATE_MAJ': 'TextEdit', 'DATE_APP': 'DateTime', 'DATE_CONF': 'DateTime', 'CODE_POST': 'TextEdit', 'NOM': 'TextEdit', 'CL_ARROND': 'TextEdit', 'CL_COLLTER': 'TextEdit', 'CL_DEPART': 'TextEdit', 'CL_REGION': 'TextEdit', 'CAPITALE': 'TextEdit', 'DATE_RCT': 'DateTime', 'RECENSEUR': 'TextEdit', 'SIREN_EPCI': 'TextEdit', 'ID_CH_LIEU': 'TextEdit', 'ID_AUT_ADM': 'TextEdit', 'CODE_SIREN': 'TextEdit', 'layer': 'TextEdit', 'path': 'TextEdit', });
lyr_CommunesadhrentesADS_44.set('fieldImages', {'ID': 'TextEdit', 'INSEE_COM': 'TextEdit', 'INSEE_ARR': 'TextEdit', 'INSEE_COL': 'TextEdit', 'INSEE_DEP': 'TextEdit', 'INSEE_REG': 'TextEdit', 'POPULATION': 'Range', 'SURFACE_HA': 'Range', 'DATE_CREAT': 'TextEdit', 'DATE_MAJ': 'TextEdit', 'DATE_APP': 'DateTime', 'DATE_CONF': 'DateTime', 'CODE_POST': 'TextEdit', 'NOM': 'TextEdit', 'CL_ARROND': 'TextEdit', 'CL_COLLTER': 'TextEdit', 'CL_DEPART': 'TextEdit', 'CL_REGION': 'TextEdit', 'CAPITALE': 'TextEdit', 'DATE_RCT': 'DateTime', 'RECENSEUR': 'TextEdit', 'SIREN_EPCI': 'TextEdit', 'ID_CH_LIEU': 'TextEdit', 'ID_AUT_ADM': 'TextEdit', 'CODE_SIREN': 'TextEdit', 'layer': 'TextEdit', 'path': 'TextEdit', });
lyr_Nomdescommunes_45.set('fieldImages', {'ID': 'TextEdit', 'INSEE_COM': 'TextEdit', 'INSEE_ARR': 'TextEdit', 'INSEE_COL': 'TextEdit', 'INSEE_DEP': 'TextEdit', 'INSEE_REG': 'TextEdit', 'POPULATION': 'Range', 'SURFACE_HA': 'Range', 'DATE_CREAT': 'TextEdit', 'DATE_MAJ': 'TextEdit', 'DATE_APP': 'DateTime', 'DATE_CONF': 'DateTime', 'CODE_POST': 'TextEdit', 'NOM': 'TextEdit', 'CL_ARROND': 'TextEdit', 'CL_COLLTER': 'TextEdit', 'CL_DEPART': 'TextEdit', 'CL_REGION': 'TextEdit', 'CAPITALE': 'TextEdit', 'DATE_RCT': 'DateTime', 'RECENSEUR': 'TextEdit', 'SIREN_EPCI': 'TextEdit', 'ID_CH_LIEU': 'TextEdit', 'ID_AUT_ADM': 'TextEdit', 'CODE_SIREN': 'TextEdit', 'layer': 'TextEdit', 'path': 'TextEdit', });
lyr_Secteurs_1.set('fieldLabels', {'LIBELLE': 'header label - visible with data', 'LIBELONG': 'header label - visible with data', 'TYPEZONE': 'hidden field', 'NOMFIC': 'hidden field', 'URLFIC': 'hidden field', 'IDURBA': 'hidden field', 'DATVALID': 'hidden field', });
lyr_Prescriptionssurfaciques_2.set('fieldLabels', {'LIBELLE': 'header label - visible with data', 'TXT': 'header label - visible with data', 'TYPEPSC': 'hidden field', 'STYPEPSC': 'hidden field', 'NOMFIC': 'hidden field', 'URLFIC': 'hidden field', 'IDURBA': 'hidden field', 'DATVALID': 'hidden field', });
lyr_Prescriptionslinaires_3.set('fieldLabels', {'LIBELLE': 'header label - visible with data', 'TXT': 'header label - visible with data', 'TYPEPSC': 'hidden field', 'STYPEPSC': 'hidden field', 'NOMFIC': 'hidden field', 'URLFIC': 'hidden field', 'IDURBA': 'hidden field', 'DATVALID': 'hidden field', });
lyr_Prescriptionsponctuelles_4.set('fieldLabels', {'LIBELLE': 'header label - visible with data', 'TXT': 'header label - visible with data', 'TYPEPSC': 'hidden field', 'STYPEPSC': 'hidden field', 'NOMFIC': 'hidden field', 'URLFIC': 'hidden field', 'IDURBA': 'hidden field', 'DATVALID': 'hidden field', });
lyr_Codessecteurs_5.set('fieldLabels', {'LIBELLE': 'hidden field', 'LIBELONG': 'hidden field', 'TYPEZONE': 'hidden field', 'NOMFIC': 'hidden field', 'URLFIC': 'hidden field', 'IDURBA': 'hidden field', 'DATVALID': 'hidden field', });
lyr_Secteurs_6.set('fieldLabels', {'LIBELLE': 'header label - visible with data', 'LIBELONG': 'header label - visible with data', 'TYPEZONE': 'hidden field', 'NOMFIC': 'hidden field', 'URLFIC': 'hidden field', 'IDURBA': 'hidden field', 'DATVALID': 'hidden field', });
lyr_Prescriptionssurfaciques_7.set('fieldLabels', {'LIBELLE': 'header label - visible with data', 'TXT': 'header label - visible with data', 'TYPEPSC': 'hidden field', 'STYPEPSC': 'hidden field', 'NOMFIC': 'hidden field', 'URLFIC': 'hidden field', 'IDURBA': 'hidden field', 'DATVALID': 'hidden field', });
lyr_Prescriptionslinaires_8.set('fieldLabels', {'LIBELLE': 'header label - visible with data', 'TXT': 'header label - visible with data', 'TYPEPSC': 'hidden field', 'STYPEPSC': 'hidden field', 'NOMFIC': 'hidden field', 'URLFIC': 'hidden field', 'IDURBA': 'hidden field', 'DATVALID': 'hidden field', });
lyr_Prescriptionsponctuelles_9.set('fieldLabels', {'LIBELLE': 'header label - visible with data', 'TXT': 'header label - visible with data', 'TYPEPSC': 'hidden field', 'STYPEPSC': 'hidden field', 'NOMFIC': 'hidden field', 'URLFIC': 'hidden field', 'IDURBA': 'hidden field', 'DATVALID': 'hidden field', });
lyr_Codessecteurs_10.set('fieldLabels', {'LIBELLE': 'hidden field', 'LIBELONG': 'hidden field', 'TYPEZONE': 'hidden field', 'NOMFIC': 'hidden field', 'URLFIC': 'hidden field', 'IDURBA': 'hidden field', 'DATVALID': 'hidden field', });
lyr_EA_11.set('fieldLabels', {'EA_NATCODE': 'hidden field', 'COMMUNE_PP': 'hidden field', 'NUMORDRE': 'hidden field', 'NUMERO': 'hidden field', 'NUMERO_DRA': 'hidden field', 'NOMUSUEL': 'hidden field', 'LIEU_IGN': 'hidden field', 'LIEU_CADAS': 'hidden field', 'VESTIGES': 'hidden field', 'NATURE_VES': 'hidden field', 'CHRONO_DEB': 'hidden field', 'CHRONO_FIN': 'hidden field', 'CHRONO_FOU': 'hidden field', 'CHRONO_DOU': 'hidden field', 'CHRONO_PER': 'hidden field', 'COMMENT_CH': 'hidden field', 'NUMERIQUE_': 'hidden field', 'NUMERIQU_1': 'hidden field', 'CHRONO_D_1': 'hidden field', 'X_SAISI': 'hidden field', 'Y_SAISI': 'hidden field', 'SURFACE': 'hidden field', 'PARCELLES': 'hidden field', 'INVENTEUR': 'hidden field', 'ANNEE_DECO': 'hidden field', 'X_DEGRE': 'hidden field', 'Y_DEGRE': 'hidden field', 'EMPRISE': 'hidden field', 'GEOREFEREN': 'hidden field', 'GEOMETRIE': 'hidden field', });
lyr_SitesauxabordslimitrophesSM_12.set('fieldLabels', {'idTigre': 'hidden field', 'idApp': 'hidden field', 'appTigre': 'hidden field', 'type': 'header label - visible with data', 'parcelle': 'hidden field', 'appelation': 'header label - visible with data', 'categorie': 'hidden field', 'localisati': 'hidden field', 'ressource': 'hidden field', 'evenement': 'hidden field', 'legende': 'hidden field', 'precision': 'hidden field', 'statut': 'hidden field', 'maj': 'hidden field', 'region': 'hidden field', 'departemen': 'hidden field', 'commune': 'hidden field', });
lyr_Sitesauxabordsdesmonuments_13.set('fieldLabels', {'idTigre': 'hidden field', 'idApp': 'hidden field', 'appTigre': 'hidden field', 'type': 'header label - visible with data', 'parcelle': 'hidden field', 'appelation': 'header label - visible with data', 'categorie': 'hidden field', 'localisati': 'hidden field', 'ressource': 'hidden field', 'evenement': 'hidden field', 'legende': 'hidden field', 'precision': 'hidden field', 'statut': 'hidden field', 'maj': 'hidden field', 'region': 'hidden field', 'departemen': 'hidden field', 'commune': 'hidden field', });
lyr_SitesPatrimoniauxRemarquables_14.set('fieldLabels', {'idTigre': 'hidden field', 'idApp': 'hidden field', 'appTigre': 'hidden field', 'type': 'header label - visible with data', 'parcelle': 'hidden field', 'appelation': 'header label - visible with data', 'categorie': 'hidden field', 'localisati': 'hidden field', 'ressource': 'hidden field', 'evenement': 'hidden field', 'legende': 'hidden field', 'precision': 'hidden field', 'statut': 'hidden field', 'maj': 'hidden field', 'region': 'hidden field', 'departemen': 'hidden field', 'commune': 'hidden field', });
lyr_Sitesclasss_15.set('fieldLabels', {'idsite': 'hidden field', 'idintgest': 'hidden field', 'dep': 'hidden field', 'nomsite': 'header label - visible with data', 'type': 'hidden field', 'descriptio': 'hidden field', 'nature': 'hidden field', 'datedecis': 'hidden field', 'datedecisr': 'hidden field', 'surfoffic': 'hidden field', 'echnum': 'hidden field', 'precision': 'hidden field', 'srcgeogen': 'hidden field', 'datesrcgen': 'hidden field', 'surfcalc': 'hidden field', 'surfmer': 'hidden field', 'urlfiche': 'hidden field', 'urltxtrgl': 'hidden field', 'urlcarte': 'hidden field', 'urlcartec': 'hidden field', 'urlweb': 'hidden field', 'urlcarmen': 'hidden field', });
lyr_Sitesinscrits_16.set('fieldLabels', {'idsite': 'hidden field', 'idintgest': 'hidden field', 'dep': 'hidden field', 'nomsite': 'hidden field', 'type': 'header label - visible with data', 'descriptio': 'hidden field', 'nature': 'header label - visible with data', 'datedecis': 'hidden field', 'datedecisr': 'hidden field', 'surfoffic': 'hidden field', 'echnum': 'hidden field', 'precision': 'hidden field', 'srcgeogen': 'hidden field', 'datesrcgen': 'hidden field', 'surfcalc': 'hidden field', 'surfmer': 'hidden field', 'urlfiche': 'hidden field', 'urltxtrgl': 'hidden field', 'urlcarte': 'hidden field', 'urlcartec': 'hidden field', 'urlweb': 'hidden field', 'urlcarmen': 'hidden field', });
lyr_Immeublesclasssouinscrits_17.set('fieldLabels', {'idTigre': 'hidden field', 'idApp': 'hidden field', 'appTigre': 'hidden field', 'type': 'header label - visible with data', 'parcelle': 'hidden field', 'appelation': 'header label - visible with data', 'categorie': 'hidden field', 'localisati': 'hidden field', 'ressource': 'hidden field', 'evenement': 'hidden field', 'legende': 'hidden field', 'precision': 'hidden field', 'statut': 'hidden field', 'maj': 'hidden field', 'region': 'hidden field', 'departemen': 'hidden field', 'commune': 'hidden field', });
lyr_ZNIEFFtype2_18.set('fieldLabels', {'NOM_ZNIEFF': 'hidden field', 'CODE_NATIO': 'hidden field', 'CODE_REGIO': 'hidden field', 'SURFACE_HA': 'hidden field', 'SAISIE_LOG': 'hidden field', 'DATE_DE_VA': 'hidden field', 'ORGANISME': 'hidden field', 'INCLUSION': 'hidden field', 'DEPARTEMEN': 'hidden field', 'URLFICTECH': 'hidden field', 'URLFICPUB': 'hidden field', 'URLMETAD': 'hidden field', });
lyr_ZNIEFFtype1_19.set('fieldLabels', {'NOM_ZNIEFF': 'hidden field', 'CODE_NATIO': 'hidden field', 'CODE_REGIO': 'hidden field', 'SURFACE_HA': 'hidden field', 'SAISIE_LOG': 'hidden field', 'DATE_DE_VA': 'hidden field', 'ORGANISME': 'hidden field', 'INCLUSION': 'hidden field', 'DEPARTEMEN': 'hidden field', 'URLFICTECH': 'hidden field', 'URLFICPUB': 'hidden field', 'URLMETAD': 'hidden field', });
lyr_Zoneshumides_20.set('fieldLabels', {'LIBELLE': 'hidden field', 'URLMETAD': 'hidden field', });
lyr_Natura2000_21.set('fieldLabels', {'NOM': 'hidden field', });
lyr_Niveaudurisque_22.set('fieldLabels', {'dpt': 'hidden field', 'niveau': 'hidden field', 'alea': 'hidden field', });
lyr_Zonesimpermables_23.set('fieldLabels', {'Id': 'hidden field', });
lyr_Zonespotentiellementsujettesauxinondations_24.set('fieldLabels', {'CLASSE': 'hidden field', 'gridcode': 'hidden field', 'FIAB_MNT': 'hidden field', 'FIAB_ESO': 'hidden field', 'FIAB_TOT': 'hidden field', 'CLASSEFIAB': 'hidden field', });
lyr_Zonespotentiellementsujettesauxdbordements_25.set('fieldLabels', {'CLASSE': 'hidden field', 'gridcode': 'hidden field', 'FIAB_MNT': 'hidden field', 'FIAB_ESO': 'hidden field', 'FIAB_TOT': 'hidden field', 'CLASSEFIAB': 'hidden field', });
lyr_Cimetire_26.set('fieldLabels', {'ID': 'hidden field', 'NATURE': 'header label - visible with data', 'NAT_DETAIL': 'hidden field', 'TOPONYME': 'header label - visible with data', 'STATUT_TOP': 'hidden field', 'IMPORTANCE': 'hidden field', 'ETAT': 'hidden field', 'DATE_CREAT': 'hidden field', 'DATE_MAJ': 'hidden field', 'DATE_APP': 'hidden field', 'DATE_CONF': 'hidden field', 'SOURCE': 'hidden field', 'ID_SOURCE': 'hidden field', 'ACQU_PLANI': 'hidden field', 'PREC_PLANI': 'hidden field', 'ACQU_ALTI': 'hidden field', 'PREC_ALTI': 'hidden field', });
lyr_Rservoir_27.set('fieldLabels', {'ID': 'hidden field', 'NATURE': 'header label - visible with data', 'ETAT': 'hidden field', 'DATE_CREAT': 'hidden field', 'DATE_MAJ': 'hidden field', 'DATE_APP': 'hidden field', 'DATE_CONF': 'hidden field', 'SOURCE': 'hidden field', 'ID_SOURCE': 'hidden field', 'ACQU_PLANI': 'hidden field', 'PREC_PLANI': 'hidden field', 'ACQU_ALTI': 'hidden field', 'PREC_ALTI': 'hidden field', 'Z_MIN_SOL': 'hidden field', 'Z_MIN_TOIT': 'hidden field', 'HAUTEUR': 'hidden field', 'Z_MAX_TOIT': 'hidden field', 'Z_MAX_SOL': 'hidden field', 'ORIGIN_BAT': 'hidden field', 'VOLUME': 'header label - visible with data', });
lyr_Terraindesport_28.set('fieldLabels', {'ID': 'hidden field', 'NATURE': 'header label - visible with data', 'NAT_DETAIL': 'hidden field', 'ETAT': 'hidden field', 'DATE_CREAT': 'hidden field', 'DATE_MAJ': 'hidden field', 'DATE_APP': 'hidden field', 'DATE_CONF': 'hidden field', 'SOURCE': 'hidden field', 'ID_SOURCE': 'hidden field', 'ACQU_PLANI': 'hidden field', 'PREC_PLANI': 'hidden field', 'ACQU_ALTI': 'hidden field', 'PREC_ALTI': 'hidden field', });
lyr_Monument_29.set('fieldLabels', {'ID': 'hidden field', 'NATURE': 'header label - visible with data', 'USAGE1': 'hidden field', 'USAGE2': 'hidden field', 'LEGER': 'hidden field', 'ETAT': 'hidden field', 'DATE_CREAT': 'hidden field', 'DATE_MAJ': 'hidden field', 'DATE_APP': 'hidden field', 'DATE_CONF': 'hidden field', 'SOURCE': 'hidden field', 'ID_SOURCE': 'hidden field', 'ACQU_PLANI': 'hidden field', 'ACQU_ALTI': 'hidden field', 'PREC_PLANI': 'hidden field', 'PREC_ALTI': 'hidden field', 'NB_LOGTS': 'hidden field', 'NB_ETAGES': 'hidden field', 'MAT_MURS': 'hidden field', 'MAT_TOITS': 'hidden field', 'HAUTEUR': 'header label - visible with data', 'Z_MIN_SOL': 'hidden field', 'Z_MIN_TOIT': 'hidden field', 'Z_MAX_TOIT': 'hidden field', 'Z_MAX_SOL': 'hidden field', 'ORIGIN_BAT': 'hidden field', 'APP_FF': 'hidden field', 'IDS_RNB': 'hidden field', });
lyr_Indiffrenci_30.set('fieldLabels', {'ID': 'hidden field', 'NATURE': 'header label - visible with data', 'USAGE1': 'header label - visible with data', 'USAGE2': 'header label - visible with data', 'LEGER': 'hidden field', 'ETAT': 'hidden field', 'DATE_CREAT': 'hidden field', 'DATE_MAJ': 'hidden field', 'DATE_APP': 'hidden field', 'DATE_CONF': 'hidden field', 'SOURCE': 'hidden field', 'ID_SOURCE': 'hidden field', 'ACQU_PLANI': 'hidden field', 'ACQU_ALTI': 'hidden field', 'PREC_PLANI': 'hidden field', 'PREC_ALTI': 'hidden field', 'NB_LOGTS': 'header label - visible with data', 'NB_ETAGES': 'header label - visible with data', 'MAT_MURS': 'header label - visible with data', 'MAT_TOITS': 'header label - visible with data', 'HAUTEUR': 'header label - visible with data', 'Z_MIN_SOL': 'hidden field', 'Z_MIN_TOIT': 'hidden field', 'Z_MAX_TOIT': 'hidden field', 'Z_MAX_SOL': 'hidden field', 'ORIGIN_BAT': 'hidden field', 'APP_FF': 'hidden field', 'IDS_RNB': 'hidden field', });
lyr_Industrielagricoleoucommercial_31.set('fieldLabels', {'ID': 'hidden field', 'NATURE': 'header label - visible with data', 'USAGE1': 'header label - visible with data', 'USAGE2': 'header label - visible with data', 'LEGER': 'hidden field', 'ETAT': 'hidden field', 'DATE_CREAT': 'hidden field', 'DATE_MAJ': 'hidden field', 'DATE_APP': 'hidden field', 'DATE_CONF': 'hidden field', 'SOURCE': 'hidden field', 'ID_SOURCE': 'hidden field', 'ACQU_PLANI': 'hidden field', 'ACQU_ALTI': 'hidden field', 'PREC_PLANI': 'hidden field', 'PREC_ALTI': 'hidden field', 'NB_LOGTS': 'hidden field', 'NB_ETAGES': 'header label - visible with data', 'MAT_MURS': 'header label - visible with data', 'MAT_TOITS': 'header label - visible with data', 'HAUTEUR': 'header label - visible with data', 'Z_MIN_SOL': 'hidden field', 'Z_MIN_TOIT': 'hidden field', 'Z_MAX_TOIT': 'hidden field', 'Z_MAX_SOL': 'hidden field', 'ORIGIN_BAT': 'hidden field', 'APP_FF': 'hidden field', 'IDS_RNB': 'hidden field', });
lyr_Constructionsponctuelles_32.set('fieldLabels', {'ID': 'hidden field', 'NATURE': 'header label - visible with data', 'NAT_DETAIL': 'hidden field', 'TOPONYME': 'header label - visible with data', 'STATUT_TOP': 'hidden field', 'IMPORTANCE': 'hidden field', 'ETAT': 'hidden field', 'DATE_CREAT': 'hidden field', 'DATE_MAJ': 'hidden field', 'DATE_APP': 'hidden field', 'DATE_CONF': 'hidden field', 'SOURCE': 'hidden field', 'ID_SOURCE': 'hidden field', 'ACQU_PLANI': 'hidden field', 'PREC_PLANI': 'hidden field', 'ACQU_ALTI': 'hidden field', 'PREC_ALTI': 'hidden field', 'HAUTEUR': 'header label - visible with data', });
lyr_Pylne_33.set('fieldLabels', {'ID': 'hidden field', 'ETAT': 'hidden field', 'DATE_CREAT': 'hidden field', 'DATE_MAJ': 'hidden field', 'DATE_APP': 'hidden field', 'DATE_CONF': 'hidden field', 'SOURCE': 'hidden field', 'ID_SOURCE': 'hidden field', 'ACQU_PLANI': 'hidden field', 'PREC_PLANI': 'hidden field', 'ACQU_ALTI': 'hidden field', 'PREC_ALTI': 'hidden field', 'HAUTEUR': 'header label - visible with data', });
lyr_SitesBASOL_34.set('fieldLabels', {'cd_metier': 'hidden field', 'autre_id': 'hidden field', 'nom_etab': 'header label - visible with data', 'nom_instr': 'hidden field', 'code_siret': 'hidden field', 'stat_instr': 'hidden field', 'date_debut': 'hidden field', 'date_fin': 'hidden field', 'descript': 'hidden field', 'code_insee': 'hidden field', 'nom_com': 'hidden field', 'x_wgs84': 'hidden field', 'y_wgs84': 'hidden field', 'code_dpt': 'hidden field', 'nom_dpt': 'hidden field', 'code_reg': 'hidden field', 'nom_reg': 'hidden field', 'act_nafv2': 'hidden field', 'act_naf': 'hidden field', 'act_icpe': 'hidden field', 'act_nafv1': 'hidden field', });
lyr_SitesCASIAS_35.set('fieldLabels', {'code_metie': 'hidden field', 'nom_invent': 'hidden field', 'code_inven': 'hidden field', 'nom_etabli': 'header label - visible with data', 'code_siret': 'hidden field', 'adresse': 'hidden field', 'code_posta': 'hidden field', 'code_insee': 'hidden field', 'nom_commun': 'hidden field', 'code_depar': 'hidden field', 'nom_depart': 'hidden field', 'code_regio': 'hidden field', 'nom_region': 'hidden field', 'etat_activ': 'hidden field', 'activite_p': 'hidden field', 'nature_loc': 'hidden field', 'x_wgs84': 'hidden field', 'y_wgs84': 'hidden field', 'fiche_risq': 'hidden field', });
lyr_ICPE_36.set('fieldLabels', {'code_aiot': 'hidden field', 'x': 'hidden field', 'y': 'hidden field', 'code_epsg': 'hidden field', 'nom_ets': 'header label - visible with data', 'num_dep': 'hidden field', 'adresse': 'hidden field', 'cd_insee': 'hidden field', 'cd_postal': 'hidden field', 'commune': 'hidden field', 'code_naf': 'hidden field', 'lib_naf': 'header label - visible with data', 'num_siret': 'hidden field', 'cd_regime': 'hidden field', 'lib_regime': 'hidden field', 'seveso': 'hidden field', 'lib_seveso': 'header label - visible with data', 'bovins': 'hidden field', 'porcs': 'hidden field', 'volailles': 'hidden field', 'carriere': 'hidden field', 'eolienne': 'hidden field', 'industrie': 'hidden field', 'ied': 'hidden field', 'priorite_n': 'hidden field', 'url_fiche': 'hidden field', });
lyr_Naturedelaroute_37.set('fieldLabels', {'ID': 'hidden field', 'NATURE': 'hidden field', 'NOM_COLL_G': 'hidden field', 'NOM_COLL_D': 'hidden field', 'IMPORTANCE': 'hidden field', 'FICTIF': 'hidden field', 'POS_SOL': 'hidden field', 'ETAT': 'hidden field', 'DATE_CREAT': 'hidden field', 'DATE_MAJ': 'hidden field', 'DATE_APP': 'hidden field', 'DATE_CONF': 'hidden field', 'SOURCE': 'hidden field', 'ID_SOURCE': 'hidden field', 'ACQU_PLANI': 'hidden field', 'PREC_PLANI': 'hidden field', 'ACQU_ALTI': 'hidden field', 'PREC_ALTI': 'hidden field', 'NB_VOIES': 'hidden field', 'LARGEUR': 'hidden field', 'IT_VERT': 'hidden field', 'PRIVE': 'hidden field', 'SENS': 'hidden field', 'BUS': 'hidden field', 'URBAIN': 'hidden field', 'VIT_MOY_VL': 'hidden field', 'ACCES_VL': 'hidden field', 'ACCES_PED': 'hidden field', 'FERMETURE': 'hidden field', 'NAT_RESTR': 'hidden field', 'RESTR_H': 'hidden field', 'RESTR_P': 'hidden field', 'RESTR_PPE': 'hidden field', 'RESTR_LAR': 'hidden field', 'RESTR_LON': 'hidden field', 'RESTR_MAT': 'hidden field', 'BORNEDEB_G': 'hidden field', 'BORNEDEB_D': 'hidden field', 'BORNEFIN_G': 'hidden field', 'BORNEFIN_D': 'hidden field', 'INSEECOM_G': 'hidden field', 'INSEECOM_D': 'hidden field', 'ALIAS_G': 'hidden field', 'ALIAS_D': 'hidden field', 'DATE_SERV': 'hidden field', 'ID_RN': 'hidden field', 'ID_ITI': 'hidden field', 'NUMERO': 'hidden field', 'NUM_EUROP': 'hidden field', 'CL_ADMIN': 'hidden field', 'GESTION': 'hidden field', 'TOPONYME': 'hidden field', 'ITI_CYCL': 'hidden field', 'VOIE_VERTE': 'hidden field', 'NATURE_ITI': 'hidden field', 'NOM_ITI': 'hidden field', 'DELESTAGE': 'hidden field', 'SRC_BAN_G': 'hidden field', 'SRC_BAN_D': 'hidden field', 'NOM_BAN_G': 'hidden field', 'NOM_BAN_D': 'hidden field', 'LD_BAN_G': 'hidden field', 'LD_BAN_D': 'hidden field', 'ID_BAN_G': 'hidden field', 'ID_BAN_D': 'hidden field', 'SENS_CYC_G': 'hidden field', 'SENS_CYC_D': 'hidden field', 'CYCLABLE_G': 'hidden field', 'CYCLABLE_D': 'hidden field', 'RETOURDFCI': 'hidden field', 'GAB_DFCI': 'hidden field', 'IMPAS_DFCI': 'hidden field', 'NDET_DFCI': 'hidden field', 'OALIM_DFCI': 'hidden field', 'PTMAX_DFCI': 'hidden field', 'PISTE_DFCI': 'hidden field', 'DFCI_DEBRO': 'hidden field', 'DFCI_FOSSE': 'hidden field', 'SENS_DFCI': 'hidden field', 'TERR_DFCI': 'hidden field', 'VIT_DFCI': 'hidden field', 'CROIS_DFCI': 'hidden field', 'CAT_DFCI': 'hidden field', });
lyr_Communesassociesoudlgues_38.set('fieldLabels', {'ID': 'hidden field', 'INSEE_CAD': 'hidden field', 'INSEE_COM': 'hidden field', 'NATURE': 'hidden field', 'NOM': 'hidden field', 'DATE_CREAT': 'hidden field', 'DATE_MAJ': 'hidden field', 'DATE_APP': 'hidden field', 'DATE_CONF': 'hidden field', 'CODE_POST': 'hidden field', 'ID_CH_LIEU': 'hidden field', 'ID_AUT_ADM': 'hidden field', 'POPULATION': 'hidden field', 'CODE_SIREN': 'hidden field', });
lyr_Communes_39.set('fieldLabels', {'ID': 'hidden field', 'INSEE_COM': 'hidden field', 'INSEE_ARR': 'hidden field', 'INSEE_COL': 'hidden field', 'INSEE_DEP': 'hidden field', 'INSEE_REG': 'hidden field', 'POPULATION': 'hidden field', 'SURFACE_HA': 'hidden field', 'DATE_CREAT': 'hidden field', 'DATE_MAJ': 'hidden field', 'DATE_APP': 'hidden field', 'DATE_CONF': 'hidden field', 'CODE_POST': 'hidden field', 'NOM': 'hidden field', 'CL_ARROND': 'hidden field', 'CL_COLLTER': 'hidden field', 'CL_DEPART': 'hidden field', 'CL_REGION': 'hidden field', 'CAPITALE': 'hidden field', 'DATE_RCT': 'hidden field', 'RECENSEUR': 'hidden field', 'SIREN_EPCI': 'hidden field', 'ID_CH_LIEU': 'hidden field', 'ID_AUT_ADM': 'hidden field', 'CODE_SIREN': 'hidden field', 'layer': 'hidden field', 'path': 'hidden field', });
lyr_PETRduPaysdeBray_40.set('fieldLabels', {'ID': 'hidden field', 'CODE_SIREN': 'hidden field', 'NATURE': 'hidden field', 'NOM': 'hidden field', 'DATE_CREAT': 'hidden field', 'DATE_MAJ': 'hidden field', 'DATE_APP': 'hidden field', 'DATE_CONF': 'hidden field', 'ID_AUT_ADM': 'hidden field', 'layer': 'hidden field', 'path': 'hidden field', });
lyr_Normandie_41.set('fieldLabels', {'ID': 'hidden field', 'INSEE_REG': 'hidden field', 'NOM': 'hidden field', 'DATE_CREAT': 'hidden field', 'DATE_MAJ': 'hidden field', 'DATE_APP': 'hidden field', 'DATE_CONF': 'hidden field', 'ID_AUT_ADM': 'hidden field', 'CODE_SIREN': 'hidden field', });
lyr_MasquePETR_42.set('fieldLabels', {'id': 'hidden field', });
lyr_CommunesmembresduPETR_43.set('fieldLabels', {'ID': 'hidden field', 'INSEE_COM': 'hidden field', 'INSEE_ARR': 'hidden field', 'INSEE_COL': 'hidden field', 'INSEE_DEP': 'hidden field', 'INSEE_REG': 'hidden field', 'POPULATION': 'hidden field', 'SURFACE_HA': 'hidden field', 'DATE_CREAT': 'hidden field', 'DATE_MAJ': 'hidden field', 'DATE_APP': 'hidden field', 'DATE_CONF': 'hidden field', 'CODE_POST': 'hidden field', 'NOM': 'hidden field', 'CL_ARROND': 'hidden field', 'CL_COLLTER': 'hidden field', 'CL_DEPART': 'hidden field', 'CL_REGION': 'hidden field', 'CAPITALE': 'hidden field', 'DATE_RCT': 'hidden field', 'RECENSEUR': 'hidden field', 'SIREN_EPCI': 'hidden field', 'ID_CH_LIEU': 'hidden field', 'ID_AUT_ADM': 'hidden field', 'CODE_SIREN': 'hidden field', 'layer': 'hidden field', 'path': 'hidden field', });
lyr_CommunesadhrentesADS_44.set('fieldLabels', {'ID': 'hidden field', 'INSEE_COM': 'hidden field', 'INSEE_ARR': 'hidden field', 'INSEE_COL': 'hidden field', 'INSEE_DEP': 'hidden field', 'INSEE_REG': 'hidden field', 'POPULATION': 'hidden field', 'SURFACE_HA': 'hidden field', 'DATE_CREAT': 'hidden field', 'DATE_MAJ': 'hidden field', 'DATE_APP': 'hidden field', 'DATE_CONF': 'hidden field', 'CODE_POST': 'hidden field', 'NOM': 'hidden field', 'CL_ARROND': 'hidden field', 'CL_COLLTER': 'hidden field', 'CL_DEPART': 'hidden field', 'CL_REGION': 'hidden field', 'CAPITALE': 'hidden field', 'DATE_RCT': 'hidden field', 'RECENSEUR': 'hidden field', 'SIREN_EPCI': 'hidden field', 'ID_CH_LIEU': 'hidden field', 'ID_AUT_ADM': 'hidden field', 'CODE_SIREN': 'hidden field', 'layer': 'hidden field', 'path': 'hidden field', });
lyr_Nomdescommunes_45.set('fieldLabels', {'ID': 'hidden field', 'INSEE_COM': 'hidden field', 'INSEE_ARR': 'hidden field', 'INSEE_COL': 'hidden field', 'INSEE_DEP': 'hidden field', 'INSEE_REG': 'hidden field', 'POPULATION': 'hidden field', 'SURFACE_HA': 'hidden field', 'DATE_CREAT': 'hidden field', 'DATE_MAJ': 'hidden field', 'DATE_APP': 'hidden field', 'DATE_CONF': 'hidden field', 'CODE_POST': 'hidden field', 'NOM': 'hidden field', 'CL_ARROND': 'hidden field', 'CL_COLLTER': 'hidden field', 'CL_DEPART': 'hidden field', 'CL_REGION': 'hidden field', 'CAPITALE': 'hidden field', 'DATE_RCT': 'hidden field', 'RECENSEUR': 'hidden field', 'SIREN_EPCI': 'hidden field', 'ID_CH_LIEU': 'hidden field', 'ID_AUT_ADM': 'hidden field', 'CODE_SIREN': 'hidden field', 'layer': 'hidden field', 'path': 'hidden field', });
lyr_Nomdescommunes_45.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});