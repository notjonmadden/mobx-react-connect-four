import Game from "./game";
import UiState from "./ui";

export default class RootStore {
    constructor(
        public readonly game: Game,
        public readonly ui: UiState
    ) { }
}