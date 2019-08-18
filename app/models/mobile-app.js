import Model from './model';

import { APIs } from '@config/apis';
import NetworkHelper from '@helpers/network';

class MobileApp extends Model {
  constructor(mobileAppData) {
    super();

    this.id = mobileAppData.trackId;
    this.name = mobileAppData.trackCensoredName;
    this.icon = mobileAppData.artworkUrl100;
    this.categories = mobileAppData.genres;
    this.link = mobileAppData.trackViewUrl;
    this.version = mobileAppData.version;

    this.description = mobileAppData.description;
    this.price = mobileAppData.price;

    this.userRating = mobileAppData.averageUserRating;
    this.userRatingCount = mobileAppData.userRatingCount;
  }

  static async getList(endpoint) {
    let response = await NetworkHelper.fetch(endpoint);

    if (response.isSuccess) {
      let listOfAppIds = response.message.feed.entry.map((app) => app.id.attributes["im:id"]);
      let listOfApps = listOfAppIds.map(async (appId) => {
        return await this.find(appId);
      });

      return Promise.all(listOfApps);
    } else {
      return null;
    }
  }

  static async getTopFree(numberOfApps = 100) {
    let endpoint = APIs.TOP_FREE_MOBILE_APPS(numberOfApps); // TESTED: the api link can only get 100.
    return await this.getList(endpoint);
  }

  static async getTopGrossing(numberOfApps = 10) {
    let endpoint = APIs.TOP_GROSSING_MOBILE_APPS(numberOfApps); // TESTED: why it can only get 10...
    return await this.getList(endpoint);
  }

  static async find(id) {
    if (this._findInLocal(id)) { return this._findInLocal(id); } // don't fetch the same app detail again

    let endpoint = APIs.MOBILE_APP_LOOKUP(id);
    let response = await NetworkHelper.fetch(endpoint);
    let message = response.message;

    if (response.isSuccess && message.resultCount > 0) {
      if (message.resultCount > 1) {
        console.log(`Error: More than one application can be found when looking for appId ${id}.
          Please handle this problem at next version.`);
        // sent error report to firebase
      }

      let mobileApp = new this(message.results[0]);
      mobileApp.save();

      return mobileApp;
    } else {
      console.log(`Try finding an application details but not found, appId: ${id}`);
      // sent error report to firebase
      return null;
    }
  }
}

export default MobileApp;
