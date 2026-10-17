// TextForge font list.
// To add a font: drop the .ttf/.otf into the fonts/ folder and add an entry below.
// "preset" is the starting style applied when the font is picked (all fields optional).
window.TF_FONTS = [
  {
    name: 'Super Mario 256',
    file: 'fonts/SuperMario256.ttf',
    sample: 'GAME\nFONT',
    preset: {
      pal: ['#009cda','#fcd000','#e71e07','#42b132','#fcd000','#e71e07','#42b132','#fcd000','#009cda','#42b132'],
      out: 30, outc: '#000000',
      dep: 20, dang: 90, depc: '#000000',
      lh: 82, sp: 0
    }
  },
  {
    name: 'Roblox 2015',
    file: 'fonts/Roblox2015.ttf',
    sample: 'ROBLOX\n2015',
    preset: {
      pal: ['#ffffff'],
      out: 26, outc: '#e2231a',
      dep: 0, dang: 90, depc: '#000000',
      lh: 95, sp: 10
    }
  },
  {
    name: 'Roblox 2006',
    file: 'fonts/BobloxClassic.ttf',
    sample: 'ROBLOX',
    preset: {
      pal: ['#e2231a'],
      out: 14, outc: '#000000',
      dep: 0, dang: 90, depc: '#000000',
      lh: 90, sp: 0
    }
  }
];
