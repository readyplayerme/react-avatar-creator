import { IFrameEvent } from '../types';

export type UserSetEventPayload = {
  id: string;
};

export type UserSetEvent = IFrameEvent<UserSetEventPayload>;
export type AvatarExportedEventPayload = {
  url: string;
  userId: string;
  avatarId: string;
};

export type AvatarExportedEvent = IFrameEvent<AvatarExportedEventPayload>;
