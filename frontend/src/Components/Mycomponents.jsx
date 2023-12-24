import { Helmet } from 'react-helmet';

function MyComponent() {
  return (
    <div>
      <Helmet>
        <meta property="og:title" content="Stuff code web-site" />
        <meta property="og:description" content="A brief description of my website" />
        <meta property="og:image" content="https://images.pexels.com/photos/18814109/pexels-photo-18814109/free-photo-of-creek-among-trees.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" />
        <meta property="og:url" content="https://stuff-seller.netlify.app/" />
        <meta property="og:type" content="website" />
      </Helmet>
    </div>
  );
}

export default MyComponent;