import { all } from 'redux-saga/effects';
import { counterEffects } from './counter.effects';


export function* rootSaga() {
    yield all([
        ...counterEffects
    ])
}