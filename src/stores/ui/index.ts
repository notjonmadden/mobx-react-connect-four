import { observable } from "mobx";
import { ColumnId } from "../../types";

export default class UiState {
    @observable potentialMove: ColumnId | null = null;
}