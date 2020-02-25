namespace myTiles {
    //% blockIdentity=images._tile
    export const tile0 = img`
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
`
}
// this block lets the game be finished when you hit a
// tree
sprites.onOverlap(SpriteKind.Player, SpriteKind.Projectile, function (sprite, otherSprite) {
    game.over(false)
})
// this makes it so the bird flies every time you
// press any button
controller.anyButton.onEvent(ControllerButtonEvent.Pressed, function () {
    let fish: Sprite = null
    fish.vy = -100
})
let pillar: Sprite = null
let pillar2: Sprite = null
let bottom_pillar: Image = null
let top_pillar: Image = null
let gap = 0
game.splash(game.askForString("would you like bird or fish"))
if (true) {
	
}
// this makes it so the pillars fly at you and the
// score changes
game.onUpdateInterval(1500, function () {
    info.changeScoreBy(1)
    gap = Math.randomRange(1, 3)
    if (gap == 0) {
        top_pillar = img`
. . . . . . 7 7 d d 7 d d d 7 d d d . . . . . . 
. . . . . . d 7 d 7 7 d d 7 7 d 7 d . . . . . . 
. . . . . . d d d 7 d 7 d 7 d d 7 d . . . . . . 
. . . . . . d d d 7 d 7 d d d 7 7 d . . . . . . 
. . . . . . d d 7 d d d 7 d d d d d . . . . . . 
. . . . . . d d 7 d d d d d d d 7 d . . . . . . 
. . . . . . d d 7 7 7 d 7 7 7 d 7 d . . . . . . 
. . . . . . d d d d d d d d d d 7 d . . . . . . 
. . . . . . d d 7 7 7 7 7 d d 7 d d . . . . . . 
. . . . . . d d d d d d d d 7 7 d d . . . . . . 
. . . . . . d 7 d d 7 7 7 d 7 d d d . . . . . . 
. . . . . . d d 7 d d d d 7 d d 7 d . . . . . . 
. . . . . . d d d 7 7 d d d d 7 7 d . . . . . . 
. . . . . . b d d 7 d d d d d 7 d b . . . . . . 
. . . . . . . b d 7 7 d 7 d 7 d b . . . . . . . 
. . . . . . . . b d d 7 d d 7 b . . . . . . . . 
`
        bottom_pillar = img`
. . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . b b b b . . . . . . . . . . 
. . . . . . . . b b d d d d b b . . . . . . . . 
. . . . . . . b d d b b b b d d b . . . . . . . 
. . . . . . b d b b d d d d b b d b . . . . . . 
. . . . . . b b b d b b b b d b b d b . . . . . 
. . . . . . c b d b d d d d b d b d b . . . . . 
. . . . . . c b b d b b b b d b b d c . . . . . 
. . . . . . c d b b d d d d b b d b c . . . . . 
. . . . . . f b d d b b b b d d b c d . . . . . 
. . . . . . d f f b d d d d b c c d d . . . . . 
. . . . . . d d d f f c c c c d d d . . . . . . 
. . . . . . d d d d d d d d d d d d . . . . . . 
. . . . . . d d 7 7 d d d d d d d d . . . . . . 
. . . . . . d d 7 d d 7 d d 7 7 d d . . . . . . 
. . . . . . d d d d d 7 7 7 d 7 d d . . . . . . 
. . . . . . d d d 7 7 d d d d 7 d d . . . . . . 
. . . . . . d d 7 7 d d d d d 7 d d . . . . . . 
. . . . . . d d 7 7 7 d d d d 7 d d . . . . . . 
. . . . . . d d 7 d d 7 d 7 d d 7 d . . . . . . 
. . . . . . d d 7 d d 7 7 7 d d 7 d . . . . . . 
. . . . . . d 7 7 7 d d 7 7 7 7 d d . . . . . . 
. . . . . . d 7 d 7 d d 7 7 7 d 7 7 . . . . . . 
. . . . . . d 7 d 7 d d 7 7 d d d d . . . . . . 
. . . . . . d 7 d 7 7 7 7 d 7 7 d d . . . . . . 
. . . . . . d 7 d 7 d d 7 d 7 7 d d . . . . . . 
. . . . . . d d 7 7 d 7 7 d 7 d d d . . . . . . 
. . . . . . d d d 7 7 d 7 d 7 d d d . . . . . . 
. . . . . . d d d 7 7 d d 7 7 7 d d . . . . . . 
. . . . . . d d 7 7 7 d d 7 d d 7 d . . . . . . 
. . . . . . d 7 d 7 7 7 7 7 7 d 7 7 . . . . . . 
. . . . . . 7 d 7 d d d 7 7 d 7 d d . . . . . . 
. . . . . . 7 d 7 d 7 d d 7 7 7 d d . . . . . . 
. . . . . . 7 d d 7 7 d d 7 7 7 d d . . . . . . 
. . . . . . 7 d d 7 7 d 7 7 d 7 d d . . . . . . 
. . . . . . 7 d d 7 7 7 d d d 7 d d . . . . . . 
. . . . . . d d d d 7 7 7 d d 7 d d . . . . . . 
. . . . . . d d 7 d d d 7 d d 7 d d . . . . . . 
. . . . . . d 7 7 d d 7 7 7 d d 7 7 . . . . . . 
. . . . . . d 7 7 d d 7 7 d 7 7 d d . . . . . . 
. . . . . . 7 d 7 d 7 7 d d d d 7 7 . . . . . . 
. . . . . . d d 7 d 7 d d 7 d d d d . . . . . . 
. . . . . . d d 7 7 d 7 7 d d d d d . . . . . . 
. . . . . . d d 7 7 7 d d d d d d d . . . . . . 
. . . . . . d d 7 d d d 7 d d d d d . . . . . . 
. . . . . . d 7 d 7 d d 7 d 7 d 7 d . . . . . . 
. . . . . . 7 d d d 7 7 d d 7 d 7 d . . . . . . 
. . . . . . d d d d 7 d d d 7 d 7 d . . . . . . 
. . . . . . d d d d 7 7 d d 7 d 7 d . . . . . . 
. . . . . . d d d d 7 7 d d 7 d 7 d . . . . . . 
. . . . . . d d d 7 d d 7 d 7 d 7 d . . . . . . 
. . . . . . d 7 7 d d d d d d 7 7 d . . . . . . 
. . . . . . d 7 d 7 7 7 7 7 7 7 7 d . . . . . . 
. . . . . . d d d 7 d d d d d d d d . . . . . . 
. . . . . . d d d 7 d d d d d d d d . . . . . . 
. . . . . . d d d 7 d d 7 7 d d 7 d . . . . . . 
. . . . . . d d d 7 d 7 7 d 7 d 7 d . . . . . . 
. . . . . . d d 7 7 d d 7 d 7 7 d d . . . . . . 
. . . . . . d d 7 7 d 7 7 d d 7 7 d . . . . . . 
. . . . . . d 7 7 d d 7 7 d 7 7 7 d . . . . . . 
. . . . . . d d d 7 d 7 d 7 d 7 d d . . . . . . 
. . . . . . d d 7 7 7 d d 7 d 7 d d . . . . . . 
. . . . . . d d 7 d d d d 7 d d d d . . . . . . 
`
    } else if (gap == 1) {
        top_pillar = img`
. . . . . . d d d d d d d d d d d d . . . . . . 
. . . . . . d d 7 d d d d d d 7 d d . . . . . . 
. . . . . . d d d 7 d d d 7 d 7 d d . . . . . . 
. . . . . . d d d d 7 7 7 d 7 d d d . . . . . . 
. . . . . . d d d 7 7 d 7 d 7 d d d . . . . . . 
. . . . . . d d 7 d d d d 7 7 d d d . . . . . . 
. . . . . . d 7 d 7 d d 7 7 7 d d d . . . . . . 
. . . . . . d d d 7 7 7 d d 7 d d d . . . . . . 
. . . . . . d d 7 7 d d 7 d d 7 d d . . . . . . 
. . . . . . d 7 d d d d 7 d 7 7 7 d . . . . . . 
. . . . . . d d d 7 d 7 d d d 7 d d . . . . . . 
. . . . . . d d 7 d 7 d d 7 d d 7 d . . . . . . 
. . . . . . d 7 d 7 7 d 7 7 d d 7 d . . . . . . 
. . . . . . d 7 d d 7 7 d d 7 d d d . . . . . . 
. . . . . . d 7 d d d 7 7 7 7 d d d . . . . . . 
. . . . . . d d d d d d 7 d d d d d . . . . . . 
. . . . . . d 7 7 d d d 7 7 d d 7 d . . . . . . 
. . . . . . 7 7 d d d 7 7 d 7 7 d d . . . . . . 
. . . . . . 7 7 7 d 7 7 7 d 7 d d d . . . . . . 
. . . . . . d d 7 d d d d d d d d d . . . . . . 
. . . . . . d d 7 d 7 d d 7 d d d d . . . . . . 
. . . . . . d d 7 7 d d 7 d d d d d . . . . . . 
. . . . . . d d 7 d d 7 d 7 7 d d d . . . . . . 
. . . . . . d d 7 d 7 d d 7 d d d d . . . . . . 
. . . . . . d d d d 7 d 7 d d d 7 d . . . . . . 
. . . . . . d 7 7 7 d d d d d 7 d d . . . . . . 
. . . . . . d d d 7 d d 7 7 d 7 d d . . . . . . 
. . . . . . . 7 7 d d 7 d d 7 d d . . . . . . . 
. . . . . . . 7 d d d d d d d d . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . 
`
        bottom_pillar = img`
. . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . b b b b . . . . . . . . . . 
. . . . . . . . b b d d d d b b . . . . . . . . 
. . . . . . . b d d b b b b d d b . . . . . . . 
. . . . . . b d b b d d d d b b d b . . . . . . 
. . . . . b d b b d b b b b d b b d b . . . . . 
. . . . . b d b d b d d d d b d b d b . . . . . 
. . . . . c d b b d b b b b d b b d c . . . . . 
. . . . . c b d b b d d d d b b d b c . . . . . 
. . . . . d f b d d b b b b d d b c d . . . . . 
. . . . . d d f f b d d d d b c c d d . . . . . 
. . . . . d d d d f f c c c c d d d d . . . . . 
. . . . . d 7 d d d d d d d d d d d d . . . . . 
. . . . . d d 7 d d d d d d d d d d d . . . . . 
. . . . . d d 7 d d d 7 7 d d 7 d d d . . . . . 
. . . . . d d d 7 d 7 d d d 7 d d d d . . . . . 
. . . . . d d d d 7 d d d d 7 d d d d . . . . . 
. . . . . d d d 7 7 d d d 7 7 7 d d d . . . . . 
. . . . . d d 7 d d 7 d 7 d 7 7 d d d . . . . . 
. . . . . d d 7 d d d 7 7 d 7 d d d d . . . . . 
. . . . . d 7 d d d d 7 d 7 7 d d d d . . . . . 
. . . . . d 7 d d d d 7 7 7 d 7 d d d . . . . . 
. . . . . d d d 7 d d 7 d d 7 7 d d d . . . . . 
. . . . . d d d 7 d d 7 d d 7 d 7 d d . . . . . 
. . . . . d d d d 7 d 7 d d d 7 7 d d . . . . . 
. . . . . d d d d 7 7 7 d d d d 7 7 d . . . . . 
. . . . . d d d d 7 7 d 7 d d d d d 7 . . . . . 
. . . . . d d d 7 d 7 d 7 d d d d 7 d . . . . . 
. . . . . d d d 7 7 7 d 7 d d d d 7 d . . . . . 
. . . . . d d d 7 7 7 7 d 7 d d 7 d d . . . . . 
. . . . . d d d d 7 7 7 d 7 d d 7 d d . . . . . 
. . . . . d 7 7 7 d d d 7 d 7 d 7 d d . . . . . 
. . . . . d d d 7 d d 7 d 7 7 7 d d d . . . . . 
. . . . . d d 7 d 7 d 7 d 7 d 7 d d d . . . . . 
. . . . . d 7 d d 7 d 7 d d d 7 7 d d . . . . . 
. . . . . d 7 d d 7 7 d d d 7 d 7 d d . . . . . 
. . . . . d d d d 7 7 d d d 7 7 d 7 d . . . . . 
. . . . . d d d d 7 7 d d d 7 7 d d d . . . . . 
. . . . . d d d 7 7 d d d d 7 d d d d . . . . . 
. . . . . d d d 7 7 7 d 7 d 7 d d d d . . . . . 
. . . . . d d d 7 d 7 7 d 7 7 d d d d . . . . . 
. . . . . d d d 7 d 7 d 7 7 d d d d 7 . . . . . 
. . . . . d d d 7 d 7 7 7 7 d d d 7 d . . . . . 
. . . . . d d d d 7 d 7 7 7 7 d d 7 d . . . . . 
. . . . . d d d d 7 7 7 7 7 7 d d 7 d . . . . . 
. . . . . d d d d 7 7 d d 7 7 d d 7 d . . . . . 
. . . . . d d d 7 7 d 7 7 7 7 7 7 d d . . . . . 
. . . . . d d 7 d 7 d d 7 7 7 7 7 d d . . . . . 
. . . . . d d d 7 7 d 7 7 7 7 d 7 d d . . . . . 
. . . . . d d d 7 7 d 7 7 d 7 7 7 7 7 7 . . . . 
. . . . . d d d 7 d d 7 7 d 7 7 7 d d . . . . . 
. . . . . d 7 d 7 d d 7 7 7 7 7 d d d . . . . . 
. . . . . d 7 d 7 d d 7 d 7 7 7 d d d . . . . . 
. . . . . 7 d d 7 d d 7 d 7 d 7 d d d . . . . . 
. . . . . 7 d d 7 d 7 d d d 7 d d d 7 . . . . . 
. . . . . 7 d d 7 d 7 d d d 7 d d 7 d . . . . . 
. . . . . d 7 d 7 d d d d 7 d d 7 d d . . . . . 
. . . . . d 7 d 7 d d d d 7 d d 7 d d . . . . . 
. . . . . d d 7 7 d d d d d d 7 7 d d . . . . . 
. . . . . d d 7 d d 7 7 7 d 7 d d 7 d . . . . . 
. . . . . d d 7 d d d d 7 7 d d d 7 d . . . . . 
. . . . . d d 7 d d d d 7 7 d d 7 7 d . . . . . 
. . . . . d d d 7 d d d 7 d d d d d d . . . . . 
`
    } else if (gap == 2) {
        top_pillar = img`
. . . . . 6 f e e e e e e e e e e f 6 . . . . . 
. . . . 6 7 7 6 e e e e e e e e e 6 7 6 . . . . 
. . . 6 7 7 7 6 6 6 e e e e 6 6 6 7 7 7 6 . . . 
. . 6 7 7 6 e e 6 7 7 7 7 7 7 7 6 6 7 7 7 6 . . 
. . . 6 6 8 e e 7 7 6 8 8 6 7 7 8 8 6 6 6 . . . 
. . . . . . e e 7 7 e e e e 6 7 e e e e . . . . 
. . . . . . e e 6 e e e e e e 6 c e f . . . . . 
. . . . . . e e e e e e e e e e e e f . . . . . 
. . . . . . e e e e e e e e e e e e f . . . . . 
. . . . . . e e e e e e e e e e e c f . . . . . 
. . . . . . e e e e e e e e e e e c f . . . . . 
. . . . . . e e e e e e e e e e e f f . . . . . 
. . . . . . f e e e e e e e e e e f e . . . . . 
. . . . . 6 f e e e e e e e e e e f 6 . . . . . 
. . . . 6 7 7 6 e e e e e e e e e 6 7 6 . . . . 
. . . 6 7 7 7 6 6 6 e e e e 6 6 6 7 7 7 6 . . . 
. . 6 7 7 6 e e 6 7 7 7 7 7 7 7 6 6 7 7 7 6 . . 
. . . 6 6 8 e e 7 7 6 8 8 6 7 7 8 8 6 6 6 . . . 
. . . . . . e e 7 7 e e e e 6 7 e e . . . . . . 
. . . . . . e e 6 e e e e e e 6 c e . . . . . . 
. . . . . . e e f e e e e e e e c e . . . . . . 
. . . . . . e e c e e e e e e e c e . . . . . . 
. . . . . . e e c e e e e e e e f e . . . . . . 
. . . . . . e e c e e e e e e e f e . . . . . . 
. . . . . . e e e e e e e e e e f e . . . . . . 
. . . . . . e e e e e e e e e e c e . . . . . . 
. . . . . 6 e e e e e e e e e e c e 6 . . . . . 
. . . . 6 7 7 6 e e e e e e e e e 6 7 6 . . . . 
. . . 6 7 7 6 6 6 6 e e e e 6 7 6 6 7 7 6 . . . 
. . 6 7 7 6 e e 7 7 7 7 7 7 7 7 6 6 7 7 7 6 . . 
. . . 6 6 8 c e 7 7 6 8 8 6 7 7 8 8 6 6 6 . . . 
. . . . . . c e 7 7 e e e e 6 7 e e . . . . . . 
. . . . . . e e e e e e e e e e e e . . . . . . 
. . . . . . e e e e e e e e e e e e . . . . . . 
. . . . . . e e e e e e e e e e e e . . . . . . 
. . . . . . e e e e e e e e e e e e . . . . . . 
. . . . . . e e e e e e e e e e e e . . . . . . 
. . . . . . e e e e e e e e e e e e . . . . . . 
. . . . . . e e e e e e e e e e e e . . . . . . 
. . . . . . b e e e e e e e e e e b . . . . . . 
. . . . . . . b e e e e e e e e b . . . . . . . 
. . . . . . . . b e e e e e e b . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . 
`
        bottom_pillar = img`
. . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . b b b b . . . . . . . . . . 
. . . . . . . . b b d d d d b b . . . . . . . . 
. . . . . . . b d d b b b b d d b . . . . . . . 
. . . . . . b d b b d d d d b b d b . . . . . . 
. . . . . b d b b d b b b b d b b d b . . . . . 
. . . . . b d b d b d d d d b d b d b . . . . . 
. . . . . c d b b d b b b b d b b d c . . . . . 
. . . . . c b d b b d d d d b b d b c . . . . . 
. . . . . e f b d d b b b b d d b c e . . . . . 
. . . . . e e f f b d d d d b c c e e . . . . . 
. . . . . e e e e f f c c c c e e e . . . . . . 
. . . . . c e e e e e e e e e e e e . . . . . . 
. . . . . c e e e e e e e e e e e e . . . . . . 
. . . . . f e e e e e e e e e e e e . . . . . . 
. . . . . c c e e e e e e e e e e e . . . . . . 
. . . . . . f e e e e e e e e e e e . . . . . . 
. . . . . 6 f c e e e e e e e e e e 6 . . . . . 
. . . . 6 7 7 6 e e e e e e e e e 6 7 6 . . . . 
. . . 6 7 7 7 6 6 6 e e e e 6 6 6 6 7 7 6 . . . 
. . 6 7 7 6 8 e 6 7 7 6 6 7 7 7 6 6 7 7 7 6 . . 
. . . 6 6 8 e e 7 7 6 8 8 6 7 7 8 8 6 6 6 . . . 
. . . . . . e e 7 7 e e e e 7 7 e c e e . . . . 
. . . . . . e e 6 e e e e e e 6 e e f . . . . . 
. . . . . . e e e e e e e e e e e e f . . . . . 
. . . . . . e e e e e e e e e e e e f . . . . . 
. . . . . . e e e e e e e e e e e c f . . . . . 
. . . . . . c e e e e e e e e e e c f . . . . . 
. . . . . . c e e e e e e e e e e f f . . . . . 
. . . . . . f e e e e e e e e e e f e . . . . . 
. . . . . 6 f e e e e e e e e e e f 6 . . . . . 
. . . . 6 7 7 6 e e e e e e e e e 6 7 6 . . . . 
. . . 6 7 7 7 6 6 6 e e e e 6 6 6 7 7 7 6 . . . 
. . 6 7 7 6 e e 6 7 7 7 7 7 7 7 6 6 7 7 7 6 . . 
. . . 6 6 8 e e 7 7 6 8 8 6 7 7 8 8 6 6 6 . . . 
. . . . . . e e 7 7 e e e e 6 7 e e . . . . . . 
. . . . . . e e 6 e e e e e e 6 c e . . . . . . 
`
    } else {
        top_pillar = img`
. . . . . 6 f c e e e e e e e e e e 6 . . . . . 
. . . . 6 7 7 6 e e e e e e e e e 6 7 6 . . . . 
. . . 6 7 7 7 6 6 6 e e e e 6 6 6 6 7 7 6 . . . 
. . 6 7 7 6 8 e 6 7 7 6 6 7 7 7 6 6 7 7 7 6 . . 
. . . 6 6 8 e e 7 7 6 8 8 6 7 7 8 8 6 6 6 . . . 
. . . . . . e e 7 7 e e e e 7 7 e c e e . . . . 
. . . . . . e e 6 e e e e e e 6 e e f . . . . . 
. . . . . . e e e e e e e e e e e e f . . . . . 
. . . . . . e e e e e e e e e e e e f . . . . . 
. . . . . . e e e e e e e e e e e c f . . . . . 
. . . . . . c e e e e e e e e e e c f . . . . . 
. . . . . . c e e e e e e e e e e f f . . . . . 
. . . . . . f e e e e e e e e e e f e . . . . . 
. . . . . 6 f e e e e e e e e e e f 6 . . . . . 
. . . . 6 7 7 6 e e e e e e e e e 6 7 6 . . . . 
. . . 6 7 7 7 6 6 6 e e e e 6 6 6 7 7 7 6 . . . 
. . 6 7 7 6 e e 6 7 7 7 7 7 7 7 6 6 7 7 7 6 . . 
. . . 6 6 8 e e 7 7 6 8 8 6 7 7 8 8 6 6 6 . . . 
. . . . . . e e 7 7 e e e e 6 7 e e e e . . . . 
. . . . . . e e 6 e e e e e e 6 c e f . . . . . 
. . . . . . e e e e e e e e e e e e f . . . . . 
. . . . . . e e e e e e e e e e e e f . . . . . 
. . . . . . e e e e e e e e e e e c f . . . . . 
. . . . . . e e e e e e e e e e e c f . . . . . 
. . . . . . e e e e e e e e e e e f f . . . . . 
. . . . . . f e e e e e e e e e e f e . . . . . 
. . . . . 6 f e e e e e e e e e e f 6 . . . . . 
. . . . 6 7 7 6 e e e e e e e e e 6 7 6 . . . . 
. . . 6 7 7 7 6 6 6 e e e e 6 6 6 7 7 7 6 . . . 
. . 6 7 7 6 e e 6 7 7 7 7 7 7 7 6 6 7 7 7 6 . . 
. . . 6 6 8 e e 7 7 6 8 8 6 7 7 8 8 6 6 6 . . . 
. . . . . . e e 7 7 e e e e 6 7 e e . . . . . . 
. . . . . . e e 6 e e e e e e 6 c e . . . . . . 
. . . . . . e e f e e e e e e e c e . . . . . . 
. . . . . . e e c e e e e e e e c e . . . . . . 
. . . . . . e e c e e e e e e e f e . . . . . . 
. . . . . . e e c e e e e e e e f e . . . . . . 
. . . . . . e e e e e e e e e e f e . . . . . . 
. . . . . . e e e e e e e e e e c e . . . . . . 
. . . . . 6 e e e e e e e e e e c e 6 . . . . . 
. . . . 6 7 7 6 e e e e e e e e e 6 7 6 . . . . 
. . . 6 7 7 6 6 6 6 e e e e 6 7 6 6 7 7 6 . . . 
. . 6 7 7 6 e e 7 7 7 7 7 7 7 7 6 6 7 7 7 6 . . 
. . . 6 6 8 c e 7 7 6 8 8 6 7 7 8 8 6 6 6 . . . 
. . . . . . c e 7 7 e e e e 6 7 e e . . . . . . 
. . . . . . e e e e e e e e e e e e . . . . . . 
. . . . . . e e e e e e e e e e e e . . . . . . 
. . . . . . e e e e e e e e e e e e . . . . . . 
. . . . . . e e e e e e e e e e e e . . . . . . 
. . . . . . e e e e e e e e e e e e . . . . . . 
. . . . . . e e e e e e e e e e e e . . . . . . 
. . . . . . e e e e e e e e e e e e . . . . . . 
. . . . . . b e e e e e e e e e e b . . . . . . 
. . . . . . . b e e e e e e e e b . . . . . . . 
. . . . . . . . b e e e e e e b . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . 
`
        bottom_pillar = img`
. . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . b b b b . . . . . . . . . . 
. . . . . . . . b b d d d d b b . . . . . . . . 
. . . . . . . b d d b b b b d d b . . . . . . . 
. . . . . . b d b b d d d d b b d b . . . . . . 
. . . . . b d b b d b b b b d b b d b . . . . . 
. . . . . b d b d b d d d d b d b d b . . . . . 
. . . . . c d b b d b b b b d b b d c . . . . . 
. . . . . c b d b b d d d d b b d b c . . . . . 
. . . . . e f b d d b b b b d d b c e . . . . . 
. . . . . e e f f b d d d d b c c e e . . . . . 
. . . . . e e e e f f c c c c e e e . . . . . . 
. . . . . c e e e e e e e e e e e e . . . . . . 
. . . . . c e e e e e e e e e e e e . . . . . . 
. . . . . f e e e e e e e e e e e e . . . . . . 
. . . . . c c e e e e e e e e e e e . . . . . . 
. . . . . . f e e e e e e e e e e e . . . . . . 
. . . . . 6 f c e e e e e e e e e e 6 . . . . . 
. . . . 6 7 7 6 e e e e e e e e e 6 7 6 . . . . 
. . . 6 7 7 7 6 6 6 e e e e 6 6 6 6 7 7 6 . . . 
. . 6 7 7 6 8 e 6 7 7 6 6 7 7 7 6 6 7 7 7 6 . . 
. . . 6 6 8 e e 7 7 6 8 8 6 7 7 8 8 6 6 6 . . . 
. . . . . . e e 7 7 e e e e 7 7 e c e e . . . . 
. . . . . . e e 6 e e e e e e 6 e e f . . . . . 
`
    }
    pillar2 = sprites.createProjectileFromSide(top_pillar, -45, 0)
    pillar2.top = 0
    pillar = sprites.createProjectileFromSide(bottom_pillar, -45, 0)
    pillar2.bottom = scene.screenHeight()
})
// this is so that after a certain amount of time the
// backround image will update
game.onUpdate(function () {
    if (info.score() == 15) {
        scene.setBackgroundImage(img`
2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 5 5 5 5 5 5 5 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 5 5 5 5 5 5 5 5 5 5 5 5 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
2 2 2 2 2 2 5 5 5 5 5 5 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
2 2 2 2 5 5 5 5 5 5 5 5 5 5 5 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 5 5 5 5 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 5 5 5 5 5 5 2 2 2 2 2 2 2 
2 2 2 2 5 5 5 5 5 5 5 5 5 5 5 5 5 5 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 5 5 5 5 5 5 5 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 5 5 5 5 5 5 5 5 5 5 2 2 2 2 2 2 2 2 2 2 2 5 5 5 5 5 5 5 5 5 2 2 2 2 2 2 
2 2 2 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 5 5 5 5 5 5 5 5 5 5 5 5 5 5 2 2 2 2 2 2 2 5 5 5 5 5 5 5 5 5 5 5 5 5 2 2 2 2 
5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 
5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 
5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 
5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 
5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 
5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 
5 5 5 5 5 5 5 5 5 5 5 5 b b 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 
5 5 5 5 5 5 5 5 5 5 5 b b b b 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 
5 5 5 5 5 b b 5 5 5 b b b b b 5 5 5 b b b b 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 b b b b 5 5 5 5 5 5 5 b b b 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 
5 5 5 5 b b b b 5 b b b b b b 5 b b b b b b b 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 b b b b b b 5 5 5 b b b b b b b 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 4 4 4 4 4 4 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 
5 5 5 b b b b b b b b b b b b b b b b b b b b b b 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 b b b b b b b 5 b b b b b b b b b 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 
5 5 5 b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 b b b b b b b b b b b b b b b b b b 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 
5 5 5 b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 b b b b b b b b b b b b b b b b b b 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 4 4 4 4 4 4 4 5 5 5 5 5 5 5 5 5 5 5 
5 5 b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 b b b b b b b b b b b b b b b b b b 5 5 5 5 5 5 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 4 4 4 4 4 4 4 4 4 4 4 4 4 4 5 5 5 5 5 5 5 5 
5 5 b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 b b b b b b b b b b b b b b b b b b b b b 5 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 5 5 5 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 5 5 5 
5 5 b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b 4 4 4 4 4 4 4 4 4 4 4 4 4 4 b b b b b b b b b b b b b b b b b b b b b b b 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 5 5 
5 5 b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b 4 4 4 4 4 4 4 4 4 4 4 4 4 4 b b b b b b b b b b b b b b b b b b b b b b b b 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 5 5 
4 4 b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b 4 4 4 4 4 4 4 4 4 b b b b b b b b b b b b b b b b b b b b b b b b b b 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 
4 4 b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b 4 4 4 4 4 4 4 b b b b b b b b b b b b b b b b b b b b b b b b b b b 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 
4 4 b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b 4 4 4 4 4 4 4 b b b b b b b b b b b b b b b b b b b b b b b b b b b b 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 b b 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 
4 4 b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b 4 4 4 4 4 4 4 b b b b b b b b b b b b b b b b b b b b b b b b b b b b b 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 b b b 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 
4 4 b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b 4 4 4 4 4 4 b b b b b b b b b b b b b b b b b b b b b b b b b b b b b 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 b b b b 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 
4 4 4 b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b 4 4 4 4 4 4 b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 b b b b 4 4 4 4 4 4 4 b b b b b b b 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 
4 4 4 b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b 4 4 4 4 4 4 b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 b b b b b 4 4 4 4 b b b b b b b b b b 4 4 b b b b b b 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 
4 4 4 b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b 4 4 4 4 4 4 4 4 4 4 b b b b b b b b b b b b b b b b b b b b b b b b b b b b 4 4 4 4 4 4 4 4 4 4 4 4 4 4 b b b b b b 4 b b b b b b b b b b b b b b b b b b b b b b b 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 
4 4 4 b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b 4 4 4 4 4 4 4 4 4 4 4 4 b b b b b b b b b b b b b b b b b b b b b b b b b b b b 4 4 4 4 4 4 4 4 4 4 4 4 4 b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 
4 4 4 b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b 3 3 4 4 4 4 4 4 4 4 4 4 4 4 4 4 b b b b b b b b b b b b b b b b b b b b b b b b b b b b 4 4 4 4 4 4 4 4 4 4 4 4 b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 
4 4 4 4 b b b b b b b b b b b b b b b b b b b b b b b b b b b b b 3 3 3 3 3 3 4 4 4 4 4 4 4 4 4 4 4 4 4 4 b b b b b b b b b b b b b b b b b b b b b b b b b b b b 3 3 4 4 4 4 4 4 4 4 4 b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b 4 4 4 4 4 4 4 4 4 3 3 3 3 3 3 3 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 4 
4 4 4 b b b b b b b b b b b b b b b b b b b b b b b b b b b b b 3 3 3 3 3 3 3 3 3 4 4 4 4 4 4 4 4 4 4 3 3 3 b b b b b b b b b b b b b b b b b b b b b b b b b b 3 3 3 3 4 4 4 4 4 4 4 3 b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b 4 4 4 4 4 3 3 3 3 3 3 3 3 3 3 3 3 3 4 4 4 4 4 4 4 4 4 4 4 4 4 
4 4 4 4 b b b b b b b b b b b b b b b b b b b b b b b b b b 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 4 4 3 3 3 3 3 b b b b b b b b b b b b b b b b b b b b b b b b b b 3 3 3 3 3 3 4 4 3 3 3 b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 4 4 4 4 4 4 4 4 4 4 4 
4 3 3 3 3 b b b b b b b 3 3 3 3 3 3 b b b b b b b b b 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 b b b b b b b b b b b b b b b b b b b b b b b b 3 3 3 3 3 3 3 3 3 3 3 b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 4 4 4 4 4 4 4 3 4 
3 3 3 3 3 3 b b b b 3 3 3 3 3 3 3 3 b b b b b b b b 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 b b b b b b b b b b b b b b b b b b b b b b b 3 3 3 3 3 3 3 3 3 3 b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 
3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 b b b b 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 b b b b b b b b b b b b b b b b b b b 3 3 3 3 3 3 3 3 3 3 3 b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 
3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 b b b b b b b b b b b b b b b 3 3 3 3 3 3 3 3 3 3 3 3 b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 
3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 b b b b b b b b 3 3 3 3 3 3 3 3 3 3 3 3 3 b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 
3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 a 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 
3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 a a a a 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 
3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 a a a a a a a 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 
3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 a a a a a a a a a a 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 
3 a a 3 a a a a a a a 3 3 3 3 3 3 3 3 3 3 a a a a a a a a a a a a a a a 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 3 a a a 3 3 3 b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b 3 3 3 3 3 3 3 a a a a a a a a a a a 3 3 3 3 3 3 
3 3 3 a a a a a a a a a a a a a 3 3 a a a a a a a a a a a a a a a a a a a a a a a a a a 3 3 3 a a a a a a a a a a a a 3 3 3 3 3 3 3 3 3 3 3 3 a a a a a a a a a a a a a a a 3 b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b 3 3 3 3 a a a a a a a a a a a a a a a a a 3 3 3 
3 3 3 a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a 3 3 3 3 3 3 3 3 3 a a a a a a a a a a a a a a a a a a b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b 3 3 3 a a a a a a a a a a a a a a a a a a a 3 3 
3 3 a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a 3 3 3 3 a a a a a a a a a a a a a a a a a a a a a a b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b 3 a a a a a a a a a a a a a a a a a a a a a a 3 3 
a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b a a a a a a a a a a a a a a a a a a a a a a a a a 
a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b a a a a a a a a a a a a a a a a a a a a a a a a a a 
a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b a a a a a a a a a a a a a a a a a a a a a a a a a a a 
a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b a a a a a a a a a a a a a a a a a a a a a a a a a a a 
a a a a a a a a a a a a a a b b b b b a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b a a a a a a a a a a a a a a a a a a a a a a a a a a a 
a a a a a a a a a a a a a b b b b b b b a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b a a a a a a a a a a a a a a a a a a a a a a a a a a a 
a a a a a a a a a a a a b b b b b b b b a a a a b b b b b b b b b a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b a a a a a a a a a a a a a a a a a a a a a a a a a a a a 
a a a a a a a a a a a b b b b b b b b b b b b b b b b b b b b b b a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a b b b b b a b b b b b b b b b b b b b b b b b b b b b b b b b b b b a a a a a a a a a a a a a a a a a a a a a a a a a a a a 
a a a a a a a a a a b b b b b b b b b b b b b b b b b b b b b b b b a a a b b b b b b a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a b b b b b b b b b b b b b b b b b b b b b b b b b b b a a a a a a a a a a a a a a a a a a a a a a a a a a a a a 
a a a a a a a a a b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a b b b b b b b b b b b b b b b b b b b b b b b b b b a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a 
a a a a a a a a a b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a b b b b b b b b b b b b b b b b b b b b b b b a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a 
a a a b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b a a a a a a a a c c c a a a a a a a a a a a a a a a a a a a a a a c c a a a a a a a a a a a a a a b b b b b b b b b b b b b b b b b b b b a a a a a a a a a a a a a a a c c c c c c c c c c c c c c a a a a a a a 
a a b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b a a a a a a c c c c c c a a a a a a a a a a a a a a a a a c c c c c c c a a a a a a a a a a a a a a a c c c c c c c c c b b b b b a a a a a a a a a a a a a a a a c c c c c c c c c c c c c c c c c c a a a a a 
a a b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b a a a c c c c c c c c c c c c a a a a a a a a a c c c c c c c c c c c c c a a a a a a a a a a a a c c c c c c c c c c c c c c a a a a a a a a a a a a a a a c c c c c c c c c c c c c c c c c c c c c c c a a a 
a a a b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b c c c c c c c c c c c c c c c c c a a a a c c c c c c c c c c c c c c c c a a a a a a a a a a a c c c c c c c c c c c c c c c c c a a a a a a a c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c a a 
a c c b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c a a a a a a a c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c a a 
c c c c b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c 
c c c c b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c 
c c c c b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c 
c c c c c b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c 
c c c c c c b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c 
c c c c c c c b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c 
c c c c c c c c b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c 
c c c c c c c c b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c 
c c c c c c c c c b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c 
c c c c c c c c c b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c 
c c c c c c c c c c b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c 
c c c c c c c c c c c b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c 
c c c c c c c c c c c c c b b b b c b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c 
c c c c c c c c c c c c c c c c c c c b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c 
c c c c c c c c c c c c c c c c c c c c b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c 
c c c c c c c c c c c c c c c c c c c c c c b b b b b b c c b b b b b b b b b b b b b b b b b b b b b b b b b c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c f c c c c c c c c c c c c c c c c c c c c c c c c c c c 
c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c b b b b b b b b b b b b b b b b b b b c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c f c c c c c c c c c c c c c c c c c c c c c c c c c c c f f f c c c c c c c c c c c c c c c c c c c c c c c c c c 
c c c c f c c c c c c c c c c c c c c c c c c c c c c c c c c b b b b b b b b c c b b b b b b b c c f c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c f c c c c c f f f f c c c c c c f c c c c f f f f c c c c c c c c c c f f f f c c c c c c c c c c c c c c c c f f c c c c c c c c 
c c c c c f f f c c c c c c c c c c c c c c c f f f f f f f f f f f c c c c c c c c c f f f c c c f f f c c f f c c c c c c c c c c c c c c c c c c f f c c c c c c c c c c c c f f c c c f f f f c c f f f f f f c c c c c f f f c f f f f f f f c c c c c c c c f f f f f c c c c c c f c c c c c c c c c f f f c c c c c c c 
c c c c c c c c f f f c c c c c c c c c c f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f c c c c f f f c c c c c c c f f f f f c f c c c c c c c c f f f f f f f f f f f f f f f f f f f c c f f f f f f f f f f f f f f f f c c c c c c f f f f f f f f c c f f c f c c c c c c c f f f f c c c f f f f 
c c c c f f f f f f f f f f c c c c c c c f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f c c c f f f f f f f f f f c c c f f f f f f f f f f f f f f f f f f f f f f f f c f f f f f f f f f f f f f f f f f f c c c c f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
c c f f f f f f f f f f f f f f f c f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f c f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 1 f 1 f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
f 1 f f f f 1 f f f f f f 1 f f f f f f f f f f f f f f f f f f f f f f 1 f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 1 f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f f f f f f f f f f f f f 1 f f f f f f f f f f f f f 1 1 f f f f f f f f f f f f f 1 f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 1 f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f f f f f f 1 f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 1 f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 1 f f f f f f f f 1 f f f f f f f f f 1 f f f f f f f f f f f f f f f f f f 1 f f f f f f f f f f 1 f f f f f f f f f f f f f 1 f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
f f f f f f f f 1 f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 1 f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 1 f f f f f f f f f f f f f f f f f f f 1 f f f f f f f f f f f f 1 1 f f f f f f f f f f f f f 1 f f f 
f f f f f 1 f f f f f f f f f f f f f f f f f f f f f f f 1 f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 1 f f f f 1 f f f f f f f f f f f f f 1 f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 1 f f f f f f f f f f f f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f 1 f f f f f f f f f f f f f f f f f f f f f 1 1 f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 1 f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 1 f f f f f f 1 f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 1 f f f f f f f f f 1 f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 1 f f f f f f f f f f f 1 f f f f 1 f f f f f f f f f f f f f f f 1 f f f f f f f f f f f f f f 
f f f 1 f f f f f f f f 1 f f f f f f f 1 f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 1 f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 1 1 f f f f f f f f f f f f f f f f f f f f f f f f f f 1 f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 1 f f f f f f f f f f f f 1 f f f f f f f f f f f f 1 f f f f f f f f f f f f f f f f f 1 f f f f f f f f f f f f f f f f f f f f f 1 f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f 1 f f f f f f f f f f f f f f f f f f f f f f f f 1 f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 1 f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 1 f f f 1 f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 1 f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 1 f f f f f f f f f f 1 f f f f f f f f f f 
f f f f f 1 f f f f f f f f f f f f 1 f f f f f f f f 1 f f f f f f f 1 f f f f f f f f f f f f f f f f f f f f f f f f 1 f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 1 f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
f f f f f f f f f f 1 f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 1 f f f f f f f f f f f 1 f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 1 f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 1 f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f f f f f f f f f f f f f 1 f f f f f f f f f 1 f f f f f f f f f f f f f f f 1 f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 1 f f f f f f f f f f f f 1 f f f f f 1 f f f f f f f f f f f f f f f f f f f f f f f f f 1 f f f f f f f 
f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 1 f f f f f f f f f f f f f f f f f f f f f f f 1 f f f f 1 f f f f f f f f f f f f f 1 f f 1 f f f f f f f f f f f f f f f f f f f f 1 f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
f f f f 1 f f f f f f f 1 f f f f f f f f f f f f f f f f f f f 1 f f f f f f f f f f f f f f f f f f f f f f f f f f f f 1 f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 1 f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 1 f f 
f f f f f f 1 f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 1 f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 1 f f f f f f f f f f f f f f f 1 f f f f f f f f f f f f f f f f f f f f f f f f f f 
f f f f 1 f f f f f f f f f f f f f f f 1 f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 1 f f f f f f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 1 f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
`)
    }
    if (info.score() == 30) {
        scene.setBackgroundImage(img`
f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
f f f f f 1 f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 1 f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
f f f f f f f f f f 1 f f f f f f f f f f f f f f f f f f f f f f f f 1 f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f f f f f f f f f 1 f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 1 f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 1 f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 1 f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f f f f f f f f 1 f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 1 f f f f f f f f f f f f f f f f f f f f 1 f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 1 f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 1 f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
f f f f f f f f f f 1 f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 1 f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 1 f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
f f f f f f f f f 1 f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 1 f f f f f f f f f f f 1 f f f f f f f f f f f f f f f f f f f f f f f 1 f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 1 f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 1 f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 1 f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 1 f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f f f f f f f f f f f f 1 f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 1 f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 1 1 f f f f f f f f f f f f f f f f f f f f f f f f f f f f 1 f f f f f f f f f f f 
f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 1 1 f f f f f f f f f f f f f f f f f f f f f f f f f f 1 f f f f f f f f f f f 
f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 1 f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 1 f f f f f f f f f f f f f f f f f f f f f f f f 1 f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f f f f f f f f f f f f f 1 f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 1 f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 1 f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 1 1 1 f f f f f f f f 1 f f f f f f f f f f 1 f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 1 f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 1 f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 1 f f f f f f f f f f f f f f f f f f f f f f f f f f 1 f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f f f f f f f f f f f 1 f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 1 f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 1 f f f f f f f f 
f f f f f f f f f f f f f f f f f 1 f f f f f f f f 1 f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 1 f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 1 1 f f f f f f f f f f f 1 f f f f f f f f f f f f f f 
f f f f f f f f f f f f f 1 f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 1 f f f f f f f f f f f f f f f f f f 1 f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 1 f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
f f f f f f f f f f f 1 f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 1 f f f f f f f f f f f f f 1 f f f f 1 f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 1 f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 1 f f f 1 f f f f f f f f f 1 f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 1 f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 1 f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 1 f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 1 f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f f f f f f f f f 1 f f f f f f f f f f f f f 1 f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 1 f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 1 f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 1 f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 1 f f f f f 1 f f f f f f f f f f f f f f 1 f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 1 f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 1 f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 1 f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
f f f f f f f f 1 f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 1 f f f f f f f f f f f f f f f f f f f f f f f f f f f 1 f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 1 f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 1 f f f f f f f f f f f 
f f f f f f f f f f f f f f f f f f f f f f f f f 1 f f f f f f f f f f f f f f f f f f f f f f f 1 f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 1 f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
f f f f f f f f f f 1 f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 1 f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 1 f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 1 f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 1 f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 1 f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 1 f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 1 f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 1 f f f f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 1 f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 1 f f f f f f f f f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 1 f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 1 f f f f 1 f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 1 f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 1 f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 1 f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 1 1 f f f f f f f f f f f f 1 f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 1 f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
f f f f f f f f f f 1 1 f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 1 1 1 f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 1 1 f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
f f f f f f f f f 1 1 f f f f 1 1 f f 1 1 f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 1 f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 1 1 f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 1 f f f f f 
f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f b b b b b b b b b f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b f f f f f f f 
f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f b b b b b b b b b b b b b b b b b b b b b f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f f b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b 
f f f f f f f f f b b b b b b b b b b b b b b b b b f f f f f f f f f f f f f f f f f f f f f f f f f f f f f b b b b b b b b b b b b b b b b b b b b b b b b b b b f f f f f f f f f f f f f f f f f f f f f f f b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b 
f f f f f f f b b b b b b b b b b b b b b b b b b b b b b b f f f f f f f f f f f f f f f f b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b f f f f f f f f f b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b 
f f f b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b 
b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b 
b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b 
b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b 
b b b c c c c c c b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b 
b b c c c c c c c c c c c c b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b 
c c c c c c c c c c c c c c c c c c c c c c c c c c c c b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b 
c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c b b b b b b b b b b b b b b b b b b b b b b b b b b b b b c c c b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b 
c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b 
c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b 
c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b 
c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c b b b b b b b b b b b b b b b b b b b b b b b b b b b b b b c c c c c 
c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c b b b b b b b b b b b b c c c c c c c c c c 
c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c 
a a a a a a a a a a a a c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c 
a a a a a a a a a a a a a a a c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c 
a a a a a a a a a a a a a a a a a a a c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c 
a a a a a a a a a a a a a a a a a a a a a a a c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c 
a a a a a a a a a a a a a a a a a a a a a a a a a a a a c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c 
a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c a a 
a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c a a a 
a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c a a a a 
a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c c a a a a a 
a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a c c c c c c c c c c c c c c c c c c c c c c c c c c c c a a a a a a a 
a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a c c c c c c c c c c c c c c c c c c c c c c c c c a a a a a a a a 
a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a c c c c c c c c c c c c c c c c c c c a a a a a a a a a 
a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a c c c c c c c c c c a a a a a a a a a a a 
a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a c c c c c c a a a a a a a a a a a a 
a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a 
a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a 
a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a 
a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a 
a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a 
a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a a 
`)
    }
})
// every second the pillars get faster by 10 fps
game.onUpdateInterval(1000, function () {
    pillar2.vx += -10
    pillar.vx += -10
})
