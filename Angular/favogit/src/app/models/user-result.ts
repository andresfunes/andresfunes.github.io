import { Item } from './item';

export class UserResult {
    total_count: number;
    incomplete_results: boolean;
    items: Item[];
}