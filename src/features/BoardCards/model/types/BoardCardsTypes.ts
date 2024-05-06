export interface CardsTypes {
    id: string;
    card_text: string;
    columnId: string;
}

export interface BoardCardsTypes {
    id: string;
    column_title: string;
    boardId: string;
    cards: CardsTypes[];
}
