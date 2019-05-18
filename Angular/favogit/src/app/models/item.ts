import { User } from './user';

export class Item {
    login: string;
    id: number;
    node_id: string;
    avatar_url: string;
    gravatar_id: string;
    url: string;
    html_url: string;
    followers_url: string;
    subscriptions_url: string;
    organizations_url: string;
    repos_url: string;
    received_events_url: string;
    type: string;
    score: number;
    user: User;
}