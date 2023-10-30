import { Helmet } from 'react-helmet';

function MyComponent() {
  return (
    <div>
      <Helmet>
        <meta property="og:title" content="Stuff seller products" />
        <meta property="og:description" content="A brief description of my website" />
        <meta property="og:image" content="https://images.pexels.com/photos/13806376/pexels-photo-13806376.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" />
        <meta property="og:url" content="https://stuff-seller.netlify.app/" />
        <meta property="og:type" content="website" />
      </Helmet>
      <h1>Welcome to my website</h1>
      <p>This is some content on my website</p>
    </div>
  );
}

export default MyComponent;