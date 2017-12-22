import React from 'react';

const TrackSubmissions = props => {
  let items = props.data.map(item => {
    let firstName=item.firstName
    let lastName=item.lastName
    let address=item.address
    let city=item.city
    let state=item.state
    let zip=item.zip
    let phone=item.phone
    let email=item.email

    return(
      <li key={item.firstName}>
        <strong>
          {lastName}, {firstName}
        </strong>
        <div>
          Address: {address}, {city}, {state} {zip}
        </div>
        <div>
          Phone: {phone}
        </div>
        <div>
          Email: {email}
        </div>
      </li>
    )
  });

  return (
    <div>
      <h3 className="text-center">Submissions</h3>
      <ul>{items}</ul>
    </div>
  );
}

export default TrackSubmissions;
