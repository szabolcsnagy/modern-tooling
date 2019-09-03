import React from 'react'
import { render } from '@testing-library/react'
import { ArticleList } from './ArticleList'

import { Provider } from 'react-redux'
import store from '../store/index'
import { addArticle } from '../actions/index'

describe('<ArticleList>', () => {
  it('Render without errors', () => {
    // make sure the store has test item
    store.dispatch(addArticle({ title: 'hello', id: 1 }))

    const { getByTestId } = render(
      <Provider store={store}>
        <ArticleList />
      </Provider>
    )

    expect(getByTestId('list-item')).toHaveTextContent('hello')
  })
})
