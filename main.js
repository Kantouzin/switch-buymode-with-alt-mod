Game.registerMod('switch-buymode-with-alt-mod', {
  init: function () {
    const MOD = this;

    Game.registerHook('logic', () => {
      if (Game.OnAscend || Game.AscendTimer != 0) {
        return;
      }
      if (Game.promptOn) {
        return;
      }

      if (Game.keys[18] && !MOD.buyModeShortcut) {
        MOD.buyModeOld = Game.buyMode;
        Game.buyMode *= -1;
        MOD.buyModeShortcut = true;
        Game.storeBulkButton(-1);
      }
      if (!Game.keys[18] && MOD.buyModeShortcut) {
        Game.buyMode = MOD.buyModeOld;
        MOD.buyModeShortcut = false;
        Game.storeBulkButton(-1);
      }
    });
  },
  save: function () {
  },
  load: function (_) {
  }
});
