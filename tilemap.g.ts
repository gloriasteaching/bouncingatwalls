// Auto-generated code. Do not edit.
namespace myTiles {
    //% fixedInstance jres blockIdentity=images._tile
    export const transparency16 = image.ofBuffer(hex``);

    helpers._registerFactory("tilemap", function(name: string) {
        switch(helpers.stringTrim(name)) {
            case "level1":
            case "level1":return tiles.createTilemap(hex`10001000010404040404040404040404040404020608080808080000000008080808080706080808080800000000080808080807060808080808000000000808080808070608080808080000000008080808080706080808080800000000080808080807060000000000000000000000000000070600000000000b0d0c00000000000007060000000000090e0a0000000000000706000000000000000000000000000007060808080808000000000808080808070608080808080000000008080808080706080808080800000000080808080807060808080808000000000808080808070608080808080000000008080808080703050505050505050505050505050507`, img`
. . . . . 2 2 2 2 2 2 . . . . . 
. . . . . 2 . . . . 2 . . . . . 
. . . . . 2 . . . . 2 . . . . . 
. . . . . 2 . . . . 2 . . . . . 
. . . . . 2 . . . . 2 . . . . . 
2 2 2 2 2 2 . . . . 2 2 2 2 2 2 
2 . . . . . . . . . . . . . . 2 
2 . . . . . 2 2 2 . . . . . . 2 
2 . . . . . 2 2 2 . . . . . . 2 
2 . . . . . . . . . . . . . . 2 
2 2 2 2 2 2 . . . . 2 2 2 2 2 2 
. . . . . 2 . . . . 2 . . . . . 
. . . . . 2 . . . . 2 . . . . . 
. . . . . 2 . . . . 2 . . . . . 
. . . . . 2 . . . . 2 . . . . . 
. . . . . 2 2 2 2 2 2 . . . . . 
`, [myTiles.transparency16,sprites.castle.tilePath1,sprites.castle.tilePath3,sprites.castle.tilePath7,sprites.castle.tilePath2,sprites.castle.tilePath8,sprites.castle.tilePath4,sprites.castle.tilePath6,sprites.castle.tilePath5,sprites.builtin.forestTiles13,sprites.builtin.forestTiles15,sprites.builtin.forestTiles5,sprites.builtin.forestTiles7,sprites.builtin.forestTiles6,sprites.builtin.forestTiles14], TileScale.Sixteen);
        }
        return null;
    })

    helpers._registerFactory("tile", function(name: string) {
        switch(helpers.stringTrim(name)) {
            case "transparency16":return transparency16;
        }
        return null;
    })

}
// Auto-generated code. Do not edit.
