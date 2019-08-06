interface RouteNameType {
    Home: string;
    Match: string;
    Result: string;
    Game: string;
}

export const RouteNameEnum: RouteNameType = Object.freeze({
    Home: 'home',
    Match: 'match',
    Result: 'result',
    Game: 'game',
})


export const GameResultEnum = Object.freeze({
    Unknow: 0,
    Win: 1,
    Fail: 2,
    Draw: 3
});

export const GameMessageStatusEnum = Object.freeze({
    "GameExit": "gameexit",
    "GameReady": "gameready",
    "GameLoad": "gameload",
});

