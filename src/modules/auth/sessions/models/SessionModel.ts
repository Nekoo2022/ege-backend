import { Field, ObjectType } from '@nestjs/graphql';
import {
  DeviceInfo,
  LocationInfo,
  SessionMetadata,
} from 'src/shared/types/session-metadata.type';

@ObjectType()
export class LocationModel implements LocationInfo {
  @Field(() => String)
  city: string;

  @Field(() => String)
  country: string;

  @Field(() => Number)
  latidute: number;

  @Field(() => Number)
  longitude: number;
}

@ObjectType()
export class DeviceModel implements DeviceInfo {
  @Field(() => String)
  os: string;

  @Field(() => String)
  browser: string;

  @Field(() => String)
  type: string;
}

@ObjectType()
export class SessionMetadataModel implements SessionMetadata {
  @Field(() => LocationModel)
  location: LocationModel;

  @Field(() => DeviceModel)
  device: DeviceModel;

  @Field(() => String)
  ip: string;
}

@ObjectType()
export class SessionModel {
  @Field(() => SessionMetadataModel)
  metadata: SessionMetadataModel;

  @Field(() => Date)
  createdAt: Date;

  @Field(() => String)
  id: string;
}
