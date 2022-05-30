import React from 'react';

import Header from '../Header';
import PostsList from '../PostsList';
import Footer from '../Footer';

export default class Layout extends React.Component {
  componentDidMount() {
    console.log('component did mount...');
    document.addEventListener('scroll', this.handleScroll);
  }

  componentWillUnmount() {
    console.log('componente will unmount...');
    document.removeEventListener('scroll', this.handleScroll);
  }

  handleScroll = () => {
    console.log('scrolled...');
  };

  render() {
    return (
      <>
        <Header />
        <PostsList />
        <Footer />
      </>
    );
  }
}
