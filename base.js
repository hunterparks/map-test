$(document).ready(function () {
  $('#map').usmap({
    mouseover: function (event, data) {
      $('#selected-state > span')
        .text(data.name)
        .css({ 'font-weight': 'bold', color: '#FFFFFF' });
    },
    mouseout: function (event, data) {
      $('#selected-state > span').html('<b>Hover over it to find out</b>').css({
        'font-weight': 'normal',
        color: '#FFFFFF',
      });
    },
  });
});
$('#map').usmap({
  showLabels: false,
  stateStyles: {
    fill: '#FFFFFF',
    stroke: '#000000',
    'stroke-width': 3,
    'stroke-linejoin': 'round',
    scale: [1, 1],
  },
  stateHoverStyles: {
    fill: '#000000',
    stroke: '#000000',
    scale: [1.1, 1.1],
  },
  labelBackingStyles: {
    fill: '#000000',
    stroke: '#000000',
    'stroke-width': 1,
    'stroke-linejoin': 'round',
    scale: [1, 1],
  },

  // The styles for the hover
  labelBackingHoverStyles: {
    fill: '#000000',
    stroke: '#000000',
  },
  labelTextStyles: {
    fill: '#222',
    stroke: 'none',
    'font-weight': 300,
    'stroke-width': 0,
    'font-size': '21pt',
  },
  stateSpecificStyles: {
    AL: { fill: '#b30000', 'stroke-width': 1.5, stroke: '#000000' },
    AK: { fill: '#b30000', 'stroke-width': 1.5, stroke: '#000000' },
    AZ: { fill: '#0000b3', 'stroke-width': 1.5, stroke: '#000000' },
    AR: { fill: '#b30000', 'stroke-width': 1.5, stroke: '#000000' },
    CA: { fill: '#0000b3', 'stroke-width': 1.5, stroke: '#000000' },
    CO: { fill: '#0000b3', 'stroke-width': 1.5, stroke: '#000000' },
    CT: { fill: '#0000b3', 'stroke-width': 1.5, stroke: '#000000' },
    DE: { fill: '#FFFFFF', 'stroke-width': 0.5, stroke: '#000000' },
    FL: { fill: '#b30000', 'stroke-width': 1.5, stroke: '#000000' },
    GA: { fill: '#0000ff', 'stroke-width': 1.5, stroke: '#000000' },
    HI: { fill: '#0000b3', 'stroke-width': 1.5, stroke: '#000000' },
    ID: { fill: '#b30000', 'stroke-width': 1.5, stroke: '#000000' },
    IL: { fill: '#0000b3', 'stroke-width': 1.5, stroke: '#000000' },
    IN: { fill: '#b30000', 'stroke-width': 1.5, stroke: '#000000' },
    IA: { fill: '#b30000', 'stroke-width': 1.5, stroke: '#000000' },
    KS: { fill: '#b30000', 'stroke-width': 1.5, stroke: '#000000' },
    KY: { fill: '#b30000', 'stroke-width': 1.5, stroke: '#000000' },
    LA: { fill: '#b30000', 'stroke-width': 1.5, stroke: '#000000' },
    ME: { fill: '#FFFFFF', 'stroke-width': 0.5, stroke: '#000000' },
    MD: { fill: '#0000b3', 'stroke-width': 1.5, stroke: '#000000' },
    MA: { fill: '#FFFFFF', 'stroke-width': 0.5, stroke: '#000000' },
    MI: { fill: '#FFFFFF', 'stroke-width': 0.5, stroke: '#000000' },
    MN: { fill: '#FFFFFF', 'stroke-width': 0.5, stroke: '#000000' },
    MS: { fill: '#FFFFFF', 'stroke-width': 0.5, stroke: '#000000' },
    MO: { fill: '#b30000', 'stroke-width': 1.5, stroke: '#000000' },
    MT: { fill: '#FFFFFF', 'stroke-width': 0.5, stroke: '#000000' },
    NE: { fill: '#FFFFFF', 'stroke-width': 0.5, stroke: '#000000' },
    NV: { fill: '#0000b3', 'stroke-width': 1.5, stroke: '#000000' },
    NH: { fill: '#0000b3', 'stroke-width': 1.5, stroke: '#000000' },
    NJ: { fill: '#FFFFFF', 'stroke-width': 0.5, stroke: '#000000' },
    NM: { fill: '#FFFFFF', 'stroke-width': 0.5, stroke: '#000000' },
    NY: { fill: '#0000b3', 'stroke-width': 1.5, stroke: '#000000' },
    NC: { fill: '#b30000', 'stroke-width': 1.5, stroke: '#000000' },
    ND: { fill: '#b30000', 'stroke-width': 1.5, stroke: '#000000' },
    OH: { fill: '#b30000', 'stroke-width': 1.5, stroke: '#000000' },
    OK: { fill: '#b30000', 'stroke-width': 1.5, stroke: '#000000' },
    OR: { fill: '#0000b3', 'stroke-width': 1.5, stroke: '#000000' },
    PA: { fill: '#0000b3', 'stroke-width': 1.5, stroke: '#000000' },
    RI: { fill: '#FFFFFF', 'stroke-width': 0.5, stroke: '#000000' },
    SC: { fill: '#b30000', 'stroke-width': 1.5, stroke: '#000000' },
    SD: { fill: '#b30000', 'stroke-width': 1.5, stroke: '#000000' },
    TN: { fill: '#FFFFFF', 'stroke-width': 0.5, stroke: '#000000' },
    TX: { fill: '#FFFFFF', 'stroke-width': 0.5, stroke: '#000000' },
    UT: { fill: '#b30000', 'stroke-width': 1.5, stroke: '#000000' },
    VT: { fill: '#0000b3', 'stroke-width': 1.5, stroke: '#000000' },
    VA: { fill: '#FFFFFF', 'stroke-width': 0.5, stroke: '#000000' },
    WA: { fill: '#0000b3', 'stroke-width': 1.5, stroke: '#000000' },
    WV: { fill: '#FFFFFF', 'stroke-width': 0.5, stroke: '#000000' },
    WI: { fill: '#b30000', 'stroke-width': 1.5, stroke: '#000000' },
    WY: { fill: '#FFFFFF', 'stroke-width': 0.5, stroke: '#000000' },
  },

  stateSpecificHoverStyles: {
    AL: { fill: '#b30000', 'stroke-width': 3, stroke: '#000000' },
    AK: { fill: '#b30000', 'stroke-width': 3, stroke: '#000000' },
    AZ: { fill: '#0000b3', 'stroke-width': 3, stroke: '#000000' },
    AR: { fill: '#b30000', 'stroke-width': 3, stroke: '#000000' },
    CA: { fill: '#0000b3', 'stroke-width': 3, stroke: '#000000' },
    CO: { fill: '#0000b3', 'stroke-width': 3, stroke: '#000000' },
    CT: { fill: '#0000b3', 'stroke-width': 3, stroke: '#000000' },
    DE: { fill: '#FFFFFF', 'stroke-width': 0.5, stroke: '#000000' },
    FL: { fill: '#b30000', 'stroke-width': 3, stroke: '#000000' },
    GA: { fill: '#0000ff', 'stroke-width': 3, stroke: '#000000' },
    HI: { fill: '#0000b3', 'stroke-width': 3, stroke: '#000000' },
    ID: { fill: '#b30000', 'stroke-width': 3, stroke: '#000000' },
    IL: { fill: '#0000b3', 'stroke-width': 3, stroke: '#000000' },
    IN: { fill: '#b30000', 'stroke-width': 3, stroke: '#000000' },
    IA: { fill: '#b30000', 'stroke-width': 3, stroke: '#000000' },
    KS: { fill: '#b30000', 'stroke-width': 3, stroke: '#000000' },
    KY: { fill: '#b30000', 'stroke-width': 3, stroke: '#000000' },
    LA: { fill: '#b30000', 'stroke-width': 3, stroke: '#000000' },
    ME: { fill: '#FFFFFF', 'stroke-width': 0.5, stroke: '#000000' },
    MD: { fill: '#0000b3', 'stroke-width': 3, stroke: '#000000' },
    MA: { fill: '#FFFFFF', 'stroke-width': 0.5, stroke: '#000000' },
    MI: { fill: '#FFFFFF', 'stroke-width': 0.5, stroke: '#000000' },
    MN: { fill: '#FFFFFF', 'stroke-width': 0.5, stroke: '#000000' },
    MS: { fill: '#FFFFFF', 'stroke-width': 0.5, stroke: '#000000' },
    MO: { fill: '#b30000', 'stroke-width': 3, stroke: '#000000' },
    MT: { fill: '#FFFFFF', 'stroke-width': 0.5, stroke: '#000000' },
    NE: { fill: '#FFFFFF', 'stroke-width': 0.5, stroke: '#000000' },
    NV: { fill: '#0000b3', 'stroke-width': 3, stroke: '#000000' },
    NH: { fill: '#0000b3', 'stroke-width': 3, stroke: '#000000' },
    NJ: { fill: '#FFFFFF', 'stroke-width': 0.5, stroke: '#000000' },
    NM: { fill: '#FFFFFF', 'stroke-width': 0.5, stroke: '#000000' },
    NY: { fill: '#0000b3', 'stroke-width': 3, stroke: '#000000' },
    NC: { fill: '#b30000', 'stroke-width': 3, stroke: '#000000' },
    ND: { fill: '#b30000', 'stroke-width': 3, stroke: '#000000' },
    OH: { fill: '#b30000', 'stroke-width': 3, stroke: '#000000' },
    OK: { fill: '#b30000', 'stroke-width': 3, stroke: '#000000' },
    OR: { fill: '#0000b3', 'stroke-width': 3, stroke: '#000000' },
    PA: { fill: '#0000b3', 'stroke-width': 3, stroke: '#000000' },
    RI: { fill: '#FFFFFF', 'stroke-width': 0.5, stroke: '#000000' },
    SC: { fill: '#b30000', 'stroke-width': 3, stroke: '#000000' },
    SD: { fill: '#b30000', 'stroke-width': 3, stroke: '#000000' },
    TN: { fill: '#FFFFFF', 'stroke-width': 0.5, stroke: '#000000' },
    TX: { fill: '#FFFFFF', 'stroke-width': 0.5, stroke: '#000000' },
    UT: { fill: '#b30000', 'stroke-width': 3, stroke: '#000000' },
    VT: { fill: '#0000b3', 'stroke-width': 3, stroke: '#000000' },
    VA: { fill: '#FFFFFF', 'stroke-width': 0.5, stroke: '#000000' },
    WA: { fill: '#0000b3', 'stroke-width': 3, stroke: '#000000' },
    WV: { fill: '#FFFFFF', 'stroke-width': 0.5, stroke: '#000000' },
    WI: { fill: '#b30000', 'stroke-width': 3, stroke: '#000000' },
    WY: { fill: '#FFFFFF', 'stroke-width': 0.5, stroke: '#000000' },
  },

  mouseover: function (event, data) {
    var description = 'No state info loaded for this state.';
    switch (data.name) {
      case 'AL':
        description =
          '<b>Alabama: <font color=#000000>No bets; considered safe Republican</font></b><span style="font-size: 14pt;"><br><b>Current senate is <font color=#0000ff>50</font>-<font color=#ff0000>50</font></b></span>';
        break;
      case 'AK':
        description =
          '<b>Alaska: <font color=#ff0000>Republican: 99.0%</font> vs <font color=#0000ff>Democratic: 1.0%</font></b><span style="font-size: 14pt;"><br><font color=#ff0000>Republican: </font>+0.0% in last day.</font></b>';
        break;
      case 'AZ':
        description =
          '<b>Arizona: <font color=#0000ff>Kelly: 98.0%</font> vs <font color=#ff0000>Masters: 2.0%</font></b><span style="font-size: 14pt;"><br><font color=#0000ff>Kelly: </font>+0.0% in last day.</font></b>';
        break;
      case 'AR':
        description =
          '<b>Arkansas: <font color=#000000>No bets; considered safe Republican</font></b><span style="font-size: 14pt;"><br><b>Current senate is <font color=#0000ff>50</font>-<font color=#ff0000>50</font></b></span>';
        break;
      case 'CA':
        description =
          '<b>California: <font color=#000000>No bets; considered safe Democratic</font></b><span style="font-size: 14pt;"><br><b>Current senate is <font color=#0000ff>50</font>-<font color=#ff0000>50</font></b></span>';
        break;
      case 'CO':
        description =
          '<b>Colorado: <font color=#0000ff>Bennet: 99.0%</font> vs <font color=#ff0000>ODea: 1.0%</font></b><span style="font-size: 14pt;"><br><font color=#0000ff>Bennet: </font>+0.0% in last day.</font></b>';
        break;
      case 'CT':
        description =
          '<b>Connecticut: <font color=#000000>No bets; considered safe Democratic</font></b><span style="font-size: 14pt;"><br><b>Current senate is <font color=#0000ff>50</font>-<font color=#ff0000>50</font></b></span>';
        break;
      case 'DE':
        description =
          '<b>Delaware: No senate race this year</b><span style="font-size: 14pt;"><br><b>Current senate is <font color=#0000ff>50</font>-<font color=#ff0000>50</font></b></span>';
        break;
      case 'FL':
        description =
          '<b>Florida: <font color=#ff0000>Rubio: 99.0%</font> vs <font color=#0000ff>Demings: 1.0%</font></b><span style="font-size: 14pt;"><br><font color=#ff0000>Rubio: </font>+0.0% in last day.</font></b>';
        break;
      case 'GA':
        description =
          '<b>Georgia: <font color=#0000ff>Warnock: 81.1%</font> vs <font color=#ff0000>Walker: 18.9%</font></b><span style="font-size: 14pt;"><br><font color=#0000ff>Warnock: </font><img src="green.png" width="14" height="14"> 1.2% in last day.</font></b>';
        break;
      case 'HI':
        description =
          '<b>Hawaii: <font color=#000000>No bets; considered safe Democratic</font></b><span style="font-size: 14pt;"><br><b>Current senate is <font color=#0000ff>50</font>-<font color=#ff0000>50</font></b></span>';
        break;
      case 'ID':
        description =
          '<b>Idaho: <font color=#000000>No bets; considered safe Republican</font></b><span style="font-size: 14pt;"><br><b>Current senate is <font color=#0000ff>50</font>-<font color=#ff0000>50</font></b></span>';
        break;
      case 'IL':
        description =
          '<b>Illinois: <font color=#0000ff>Duckworth: 99.0%</font> vs <font color=#ff0000>Salvi: 1.0%</font></b><span style="font-size: 14pt;"><br><font color=#0000ff>Duckworth: </font>+0.0% in last day.</font></b>';
        break;
      case 'IN':
        description =
          '<b>Indiana: <font color=#000000>No bets; considered safe Republican</font></b><span style="font-size: 14pt;"><br><b>Current senate is <font color=#0000ff>50</font>-<font color=#ff0000>50</font></b></span>';
        break;
      case 'IA':
        description =
          '<b>Iowa: <font color=#ff0000>Grassley: 99.0%</font> vs <font color=#0000ff>Franken: 1.0%</font></b><span style="font-size: 14pt;"><br><font color=#ff0000>Grassley: </font>+0.0% in last day.</font></b>';
        break;
      case 'KS':
        description =
          '<b>Kansas: <font color=#000000>No bets; considered safe Republican</font></b><span style="font-size: 14pt;"><br><b>Current senate is <font color=#0000ff>50</font>-<font color=#ff0000>50</font></b></span>';
        break;
      case 'KY':
        description =
          '<b>Kentucky: <font color=#000000>No bets; considered safe Republican</font></b><span style="font-size: 14pt;"><br><b>Current senate is <font color=#0000ff>50</font>-<font color=#ff0000>50</font></b></span>';
        break;
      case 'LA':
        description =
          '<b>Louisiana: <font color=#000000>No bets; considered safe Republican</font></b><span style="font-size: 14pt;"><br><b>Current senate is <font color=#0000ff>50</font>-<font color=#ff0000>50</font></b></span>';
        break;
      case 'ME':
        description =
          '<b>Maine: No senate race this year</b><span style="font-size: 14pt;"><br><b>Current senate is <font color=#0000ff>50</font>-<font color=#ff0000>50</font></b></span>';
        break;
      case 'MD':
        description =
          '<b>Maryland: <font color=#000000>No bets; considered safe Democratic</font></b><span style="font-size: 14pt;"><br><font color=#000000>Current Senate is 50-50</font></b>';
        break;
      case 'MA':
        description =
          '<b>Massachusetts: No senate race this year</b><span style="font-size: 14pt;"><br><b>Current senate is <font color=#0000ff>50</font>-<font color=#ff0000>50</font></b></span>';
        break;
      case 'MI':
        description =
          '<b>Michigan: No senate race this year</b><span style="font-size: 14pt;"><br><b>Current senate is <font color=#0000ff>50</font>-<font color=#ff0000>50</font></b></span>';
        break;
      case 'MN':
        description =
          '<b>Minnesota: No senate race this year</b><span style="font-size: 14pt;"><br><b>Current senate is <font color=#0000ff>50</font>-<font color=#ff0000>50</font></b></span>';
        break;
      case 'MS':
        description =
          '<b>Mississippi: No senate race this year</b><span style="font-size: 14pt;"><br><b>Current senate is <font color=#0000ff>50</font>-<font color=#ff0000>50</font></b></span>';
        break;
      case 'MO':
        description =
          '<b>Missouri: <font color=#ff0000>Schmitt: 99.0%</font> vs <font color=#0000ff>Valentine: 1.0%</font></b><span style="font-size: 14pt;"><br><font color=#ff0000>Schmitt: </font>+0.0% in last day.</font></b>';
        break;
      case 'MT':
        description =
          '<b>Montana: No senate race this year</b><span style="font-size: 14pt;"><br><b>Current senate is <font color=#0000ff>50</font>-<font color=#ff0000>50</font></b></span>';
        break;
      case 'NE':
        description =
          '<b>Nebraska: No senate race this year</b><span style="font-size: 14pt;"><br><b>Current senate is <font color=#0000ff>50</font>-<font color=#ff0000>50</font></b></span>';
        break;
      case 'NV':
        description =
          '<b>Nevada: <font color=#0000ff>Cortez Masto: 99.0%</font> vs <font color=#ff0000>Laxalt: 1.0%</font></b><span style="font-size: 14pt;"><br><font color=#0000ff>Cortez Masto: </font>+0.0% in last day.</font></b>';
        break;
      case 'NH':
        description =
          '<b>N Hampshire: <font color=#0000ff>Hassan: 99.0%</font> vs <font color=#ff0000>Bolduc: 1.0%</font></b><span style="font-size: 14pt;"><br><font color=#0000ff>Hassan: </font>+0.0% in last day.</font></b>';
        break;
      case 'NJ':
        description =
          '<b>New Jersey: No senate race this year</b><span style="font-size: 14pt;"><br><b>Current senate is <font color=#0000ff>50</font>-<font color=#ff0000>50</font></b></span>';
        break;
      case 'NM':
        description =
          '<b>New Mexico: No senate race this year</b><span style="font-size: 14pt;"><br><b>Current senate is <font color=#0000ff>50</font>-<font color=#ff0000>50</font></b></span>';
        break;
      case 'NY':
        description =
          '<b>New York: <font color=#000000>No bets; considered safe Democratic</font></b><span style="font-size: 14pt;"><br><b>Current senate is <font color=#0000ff>50</font>-<font color=#ff0000>50</font></b></span>';
        break;
      case 'NC':
        description =
          '<b>North Carolina: <font color=#ff0000>Budd: 99.0%</font> vs <font color=#0000ff>Beasley: 1.0%</font></b><span style="font-size: 14pt;"><br><font color=#ff0000>Budd: </font>+0.0% in last day.</font></b>';
        break;
      case 'ND':
        description =
          '<b>North Dakota: <font color=#000000>No bets; considered safe Republican</font></b><span style="font-size: 14pt;"><br><b>Current senate is <font color=#0000ff>50</font>-<font color=#ff0000>50</font></b></span>';
        break;
      case 'OH':
        description =
          '<b>Ohio: <font color=#ff0000>Vance: 99.0%</font> vs <font color=#0000ff>Ryan: 1.0%</font></b><span style="font-size: 14pt;"><br><font color=#ff0000>Vance: </font>+0.0% in last day.</font></b>';
        break;
      case 'OK':
        description =
          '<b>Oklahoma: <font color=#000000>No bets; considered safe Republican</font></b><span style="font-size: 14pt;"><br><b>Current senate is <font color=#0000ff>50</font>-<font color=#ff0000>50</font></b></span>';
        break;
      case 'OR':
        description =
          '<b>Oregon: <font color=#0000ff>Wyden: 99.0%</font> vs <font color=#ff0000>Perkins: 1.0%</font></b><span style="font-size: 14pt;"><br><font color=#0000ff>Wyden: </font>+0.0% in last day.</font></b>';
        break;
      case 'PA':
        description =
          '<b>Pennsylvania: <font color=#0000ff>Fetterman: 98.0%</font> vs <font color=#ff0000>Oz: 1.0%</font></b><span style="font-size: 14pt;"><br><font color=#0000ff>Fetterman: </font>+0.0% in last day.</font></b>';
        break;
      case 'RI':
        description =
          '<b>Rhode Island: No senate race this year</b><span style="font-size: 14pt;"><br><b>Current senate is <font color=#0000ff>50</font>-<font color=#ff0000>50</font></b></span>';
        break;
      case 'SC':
        description =
          '<b>South Carolina: <font color=#000000>No bets; considered safe Republican</font></b><span style="font-size: 14pt;"><br><b>Current senate is <font color=#0000ff>50</font>-<font color=#ff0000>50</font></b></span>';
        break;
      case 'SD':
        description =
          '<b>South Dakota: <font color=#000000>No bets; considered safe Republican</font></b><span style="font-size: 14pt;"><br><b>Current senate is <font color=#0000ff>50</font>-<font color=#ff0000>50</font></b></span>';
        break;
      case 'TN':
        description =
          '<b>Tennessee: No senate race this year</b><span style="font-size: 14pt;"><br><b>Current senate is <font color=#0000ff>50</font>-<font color=#ff0000>50</font></b></span>';
        break;
      case 'TX':
        description =
          '<b>Texas: No senate race this year</b><span style="font-size: 14pt;"><br><b>Current senate is <font color=#0000ff>50</font>-<font color=#ff0000>50</font></b></span>';
        break;
      case 'UT':
        description =
          '<b>Utah: <font color=#ff0000>Republican: 99.0%</font> vs <font color=#0000ff>Democratic: 1.0%</font></b><span style="font-size: 14pt;"><br><font color=#ff0000>Republican: </font>+0.0% in last day.</font></b>';
        break;
      case 'VT':
        description =
          '<b>Vermont: <font color=#0000ff>Welch: 99.0%</font> vs <font color=#ff0000>Malloy: 1.0%</font></b><span style="font-size: 14pt;"><br><font color=#0000ff>Welch: </font>+0.0% in last day.</font></b>';
        break;
      case 'VA':
        description =
          '<b>Virginia: No senate race this year</b><span style="font-size: 14pt;"><br><b>Current senate is <font color=#0000ff>50</font>-<font color=#ff0000>50</font></b></span>';
        break;
      case 'WA':
        description =
          '<b>Washington: <font color=#0000ff>Murray: 99.0%</font> vs <font color=#ff0000>Smiley: 1.0%</font></b><span style="font-size: 14pt;"><br><font color=#0000ff>Murray: </font>+0.0% in last day.</font></b>';
        break;
      case 'WV':
        description =
          '<b>West Virginia: No senate race this year</b><span style="font-size: 14pt;"><br><b>Current senate is <font color=#0000ff>50</font>-<font color=#ff0000>50</font></b></span>';
        break;
      case 'WI':
        description =
          '<b>Wisconsin: <font color=#ff0000>Johnson: 99.0%</font> vs <font color=#0000ff>Barnes: 1.0%</font></b><span style="font-size: 14pt;"><br><font color=#ff0000>Johnson: </font>+0.0% in last day.</font></b>';
        break;
      case 'WY':
        description =
          '<b>Wyoming: No senate race this year</b><span style="font-size: 14pt;"><br><b>Current senate is <font color=#0000ff>50</font>-<font color=#ff0000>50</font></b></span>';
        break;
    }
    $('#selected-state > span')
      .html(description)
      .css({ 'font-weight': 'bold', color: '#000000' });
  },

  mouseout: function (event, data) {
    $('#selected-state > span')
      .html(
        '<b><u>Senate Seats 2022</u> (estimate: <font color=#0000ff>51</font>-<font color=#ff0000>49</font>. Hover over states)</b><span style="font-size: 14pt;"><br><b>Current senate is <font color=#0000ff>50</font>-<font color=#ff0000>50</font></b></span>'
      )
      .css({ 'font-weight': 'normal', color: '#000000' });
  },
  click: function (event, data) {
    $('#clicked-state')
      .text('You clicked: ' + data.name)
      .parent()
      .effect('highlight', { color: '#C7F464' }, 2000);
  },
});
//# sourceURL=pen.js
