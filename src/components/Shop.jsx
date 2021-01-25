import React, { useState, useEffect } from 'react';
import { Container, Row, Card, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import StarRating from './StarRating';
import '../App.css';

function Shop() {
  const [shopItems, setShopItems] = useState([]);
  let [favoriteItems, setFavoriteItems] = useState([]);
  const cardStyle = {
    color: 'white',
    backgroundColor: '#17a2b8',
    padding: '10px',
    width: '18rem',
    marginTop: '2rem',
    marginLeft: '2rem',
  };

  useEffect(() => {
    fetchItems();
  }, []);

  const fetchItems = async () => {
    const response = await fetch(
      'https://fortnite-api.theapinetwork.com/upcoming/get'
    );
    const responseData = await response.json();

    setShopItems(responseData.data);
  };

  const toggleFavorite = (e, clickedItem) => {
    let elementValue = e.currentTarget;
    let status;
    if (elementValue.getAttribute('data-value') === 'true') {
      status = false;
    } else {
      status = true;
    }
    elementValue.setAttribute('data-value', status);

    if (status) {
      elementValue.style.backgroundColor = '#28a745';
      let favoriteItem = shopItems.filter(
        (item) => item.itemId === clickedItem.itemId
      );
      setFavoriteItems((favoriteItems = [...favoriteItems, ...favoriteItem]));
    } else {
      let filteredItems = favoriteItems.filter(
        (item) => item.itemId !== clickedItem.itemId
      );
      elementValue.style.backgroundColor = '#17a2b8';
      setFavoriteItems((favoriteItems = [...filteredItems]));
    }
  };

  function downloadJson(favoriteItems) {
    return `data:text/json;charset=utf-8,${encodeURIComponent(
      JSON.stringify(favoriteItems)
    )}`;
  }

  return (
    <div>
      <h5 className="text-center pt-4">
        Select one or more fortnite cards to download your favorite ones
      </h5>
      <div style={{ display: 'none' }}>
        {shopItems.map((shopItem) => (
          <h3
            className="text-center"
            style={{ color: 'white' }}
            key={shopItem.itemId}
          >
            <Link to={`shop/${shopItem.itemId}`}>{shopItem.item.name}</Link>
          </h3>
        ))}
      </div>
      <div>
        <Container>
          <Row>
            {shopItems.map((shopItem) => (
              <Card
                key={shopItem.itemId}
                style={cardStyle}
                onClick={(e) => toggleFavorite(e, shopItem)}
                value={false}
                data-value={false}
              >
                <Card.Img variant="top" src={shopItem.item.images['icon']} />
                <Card.Body className="mt-1">
                  <Card.Title>{shopItem.item.name}</Card.Title>
                  <Card.Text>
                    Average Stars:
                    <StarRating
                      selectedStars={shopItem.item.ratings.avgStars}
                    ></StarRating>
                    <br />
                    Points:{shopItem.item.ratings.totalPoints}
                    <br />
                    Total votes:{shopItem.item.ratings.numberVotes}
                  </Card.Text>
                </Card.Body>
              </Card>
            ))}
          </Row>
          <Row className="text-center">
            <Button
              href={downloadJson(favoriteItems)}
              className="mt-3 mx-auto w-50 p-3"
              disabled={favoriteItems.length > 0 ? false : true}
              variant={favoriteItems.length > 0 ? 'primary' : 'secondary'}
              download="filename.json"
              style={{
                color: favoriteItems.length > 0 ? '#ffffff' : '#9e9e9e',
                pointerEvents: favoriteItems.length > 0 ? 'auto' : 'none',
              }}
            >
              Export Favorites
            </Button>
          </Row>
        </Container>
      </div>
    </div>
  );
}

export default Shop;
