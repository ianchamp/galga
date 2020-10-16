controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    projectile = sprites.createProjectileFromSprite(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        1 . . . 1 . . . . 1 . . 1 5 4 2 
        . . 1 . . . . 1 . . . . 1 5 4 2 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . 1 . . . . 1 . . . 1 . 1 5 4 2 
        . . . 1 . . . . 1 . . . 1 5 4 2 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . 1 . . . . 1 . . . . 1 5 4 2 
        1 . . . 1 . . . . 1 . . 1 5 4 2 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `, spacePlane, 200, 0)
    music.pewPew.play()
})
sprites.onOverlap(SpriteKind.Projectile, SpriteKind.Enemy, function (sprite, otherSprite) {
    otherSprite.destroy()
    sprite.destroy(effects.fire, 100)
    info.changeScoreBy(1)
    counter += 1
    if (counter == 20) {
        info.changeLifeBy(1)
        counter = 0
    }
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Enemy, function (sprite, otherSprite) {
    info.changeLifeBy(-1)
    otherSprite.destroy(effects.fire, 100)
})
let bogey: Sprite = null
let projectile: Sprite = null
let spacePlane: Sprite = null
let counter = 0
counter = 0
spacePlane = sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . 4 2 6 6 6 6 6 6 6 6 . . . . . 
    . 5 4 9 9 9 9 9 9 9 9 . . . . . 
    . . . . . . . 9 . . . . . . . . 
    . . . . . . 9 9 . . . . . . . . 
    . 6 . . . . 9 9 . . . . . . . . 
    . 9 6 . . . 9 . . . 9 9 9 9 . . 
    2 9 6 9 9 9 9 9 9 9 6 6 6 6 9 9 
    4 9 6 9 9 9 9 9 9 9 6 6 6 6 9 9 
    . 9 6 . . . 9 . . . 9 9 9 9 . . 
    . 6 . . . . 9 9 . . . . . . . . 
    . . . . . . 9 9 . . . . . . . . 
    . . . . . . . 9 . . . . . . . . 
    . 4 2 9 9 9 9 9 9 9 9 . . . . . 
    . 5 4 6 6 6 6 6 6 6 6 . . . . . 
    . . . . . . . . . . . . . . . . 
    `, SpriteKind.Player)
spacePlane.setFlag(SpriteFlag.StayInScreen, true)
info.setLife(3)
controller.moveSprite(spacePlane, 200, 200)
game.onUpdateInterval(500, function () {
    bogey = sprites.create(img`
        . . . . . . . . c c c c . . . . 
        . . . . c c c c c c c c c . . . 
        . . . c f c c a a a a c a c . . 
        . . c c f f f f a a a c a a c . 
        . . c c a f f c a a f f f a a c 
        . . c c a a a a b c f f f a a c 
        . c c c c a c c b a f c a a c c 
        c a f f c c c a b b 6 b b b c c 
        c a f f f f c c c 6 b b b a a c 
        c a a c f f c a 6 6 b b b a a c 
        c c b a a a a b 6 b b a b b a . 
        . c c b b b b b b b a c c b a . 
        . . c c c b c c c b a a b c . . 
        . . . . c b a c c b b b c . . . 
        . . . . c b b a a 6 b c . . . . 
        . . . . . . b 6 6 c c . . . . . 
        `, SpriteKind.Enemy)
    bogey.setPosition(180, randint(0, 120))
    bogey.setVelocity(-100, 0)
})
