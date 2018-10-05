// This file provide a way to add fake data into database to show our application

import callApi from 'api';

export default function createFakeData() {
  const userId = '579c0f04-c805-11e8-a8d5-f2801f1b9fd1';
  callApi({
    method : 'GET',
    route  : `/order/${userId}`,
  }).then(result => {
    if (result.articles.length === 0) {
      callApi({
        method : 'POST',
        route  : '/order',
        body   : {
          articleId : '99999',
          name      : 'someArticle',
          quantity  : 3,
          price     : '4.5',
          userId,
        },
      });
    }
  });
  return userId;
}
