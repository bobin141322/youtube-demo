import { DBSchema } from '@ngrx/db';


/**
 * ngrx/db uses a simple schema config object to initialize stores in IndexedDB.
 */
export const schema: DBSchema = {
  version: 2,
  name: 'videos_app',
  stores: {
    videos: {
      autoIncrement: true,
      primaryKey: 'id.videoId'
    }
  }
};
