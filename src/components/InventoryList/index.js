import React from 'react';
import { Card, Message, Icon } from 'semantic-ui-react';

const InventoryList = props => {
  const { inventories } = props;
  return (
    <div style={{ display: 'flex', justifyContent: 'center' }}>
      <Card.Group>
        {inventories.length > 0 ? (
          inventories.map(item => (
            <Card key={item.id}>
              <Card.Content>
                <Card.Header>{item.productName}</Card.Header>
                <Card.Meta>{item.category}</Card.Meta>
                <Card.Description>{item.description}</Card.Description>
                <Card.Description>{item.serial}</Card.Description>
                <Icon name='trash' />
                <Icon name='edit outline' />
              </Card.Content>
            </Card>
          ))
        ) : (
          <Message style={{ marginTop: '1em' }}>
            <p>No Item, Add Inventory...</p>
          </Message>
        )}
      </Card.Group>
    </div>
  );
};

export default InventoryList;
