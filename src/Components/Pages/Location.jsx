import React, { useEffect, useState } from 'react';
import { MapContainer, TileLayer, Marker, Popup, useMapEvents } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';

// Fix for default marker icons in Leaflet
delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon-2x.png',
  iconUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon.png',
  shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png',
});

// Component to handle map events like user location and shop marker placement
function LocationMarker({ userPosition, shopPositions, setUserPosition, setShopPositions }) {
  const [bbox, setBbox] = useState([]);
  
  const map = useMapEvents({
    click(e) {
      // Set user location on map click
      setUserPosition(e.latlng);
    },
    contextmenu(e) {
      // Add new shop location on right click
      const newShop = {
        id: Date.now(),
        position: [e.latlng.lat, e.latlng.lng],
        name: `Repair Shop ${shopPositions.length + 1}`,
        address: `Address ${shopPositions.length + 1}`,
        phone: `+880 1234-${Math.floor(1000 + Math.random() * 9000)}`,
        hours: '9:00 AM - 8:00 PM'
      };
      setShopPositions(prev => [...prev, newShop]);
    },
    locationfound(e) {
      setUserPosition(e.latlng);
      map.flyTo(e.latlng, map.getZoom());
      setBbox(e.bounds.toBBoxString().split(','));
    },
  });
  
  return (
    <>
      {userPosition && (
        <Marker position={userPosition}>
          <Popup>
            You are here! <br />
            Latitude: {userPosition.lat.toFixed(4)} <br />
            Longitude: {userPosition.lng.toFixed(4)} <br />
            {bbox.length > 0 && (
              <span>
                Bounding Box: <br />
                South: {bbox[1]} <br />
                West: {bbox[0]} <br />
                North: {bbox[3]} <br />
                East: {bbox[2]}
              </span>
            )}
          </Popup>
        </Marker>
      )}
      
      {shopPositions.map(shop => (
        <Marker key={shop.id} position={shop.position}>
          <Popup>
            <div className="text-center">
              <h3 className="font-bold text-lg">{shop.name}</h3>
              <p>{shop.address}</p>
              <p>Dhaka, Bangladesh</p>
              <p className="mt-2">Open: {shop.hours}</p>
              <p className="font-semibold text-primary">Phone: {shop.phone}</p>
              <div className="mt-2 text-xs text-gray-500">
                <p>Lat: {shop.position[0].toFixed(6)}</p>
                <p>Lng: {shop.position[1].toFixed(6)}</p>
              </div>
            </div>
          </Popup>
        </Marker>
      ))}
    </>
  );
}

const Location = () => {
  // User location state
  const [userPosition, setUserPosition] = useState(null);
  
  // Multiple shop locations state
  const [shopPositions, setShopPositions] = useState([
    // Sample 20+ repair shops in Dhaka
    { id: 1, position: [23.7465, 90.3762], name: 'eSolution Main Branch', address: '123/A, Dhanmondi Road 10', phone: '+880 1234-567890', hours: '9:00 AM - 8:00 PM' },
    { id: 2, position: [23.7594, 90.3793], name: 'Gulshan Tech Repair', address: '45/B, Gulshan Avenue', phone: '+880 1234-567891', hours: '10:00 AM - 9:00 PM' },
    { id: 3, position: [23.7400, 90.3950], name: 'Uttara Device Care', address: '78/C, Sector 12', phone: '+880 1234-567892', hours: '8:00 AM - 10:00 PM' },
    { id: 4, position: [23.7200, 90.4000], name: 'Banani Gadget Fix', address: '22/D, Kemal Ataturk Ave', phone: '+880 1234-567893', hours: '9:00 AM - 8:00 PM' },
    { id: 5, position: [23.7100, 90.4050], name: 'Motijheel Repair Hub', address: '56/E, Motijheel C/A', phone: '+880 1234-567894', hours: '8:00 AM - 9:00 PM' },
    { id: 6, position: [23.7600, 90.3500], name: 'Mohammadpur Fix Center', address: '89/F, Asad Ave', phone: '+880 1234-567895', hours: '10:00 AM - 8:00 PM' },
    { id: 7, position: [23.7700, 90.3600], name: 'Mirpur Tech Solutions', address: '33/G, Pallabi', phone: '+880 1234-567896', hours: '9:00 AM - 9:00 PM' },
    { id: 8, position: [23.7300, 90.3800], name: 'Farmgate Device Clinic', address: '11/H, Panthapath', phone: '+880 1234-567897', hours: '8:00 AM - 10:00 PM' },
    { id: 9, position: [23.7900, 90.4000], name: 'Bashundhara Repair Point', address: '44/I, Bashundhara R/A', phone: '+880 1234-567898', hours: '9:00 AM - 8:00 PM' },
    { id: 10, position: [23.8100, 90.4200], name: 'Uttara North Tech', address: '66/J, Sector 14', phone: '+880 1234-567899', hours: '10:00 AM - 9:00 PM' },
    { id: 11, position: [23.7000, 90.3500], name: 'Dhanmondi South Fix', address: '77/K, Road 27', phone: '+880 1234-567800', hours: '9:00 AM - 8:00 PM' },
    { id: 12, position: [23.7800, 90.3700], name: 'Mirpur DOHS Service', address: '88/L, DOHS', phone: '+880 1234-567801', hours: '8:00 AM - 9:00 PM' },
    { id: 13, position: [23.7600, 90.3900], name: 'Gulshan 2 Repair', address: '99/M, Block K', phone: '+880 1234-567802', hours: '10:00 AM - 8:00 PM' },
    { id: 14, position: [23.7300, 90.4100], name: 'Banani Lake Service', address: '23/N, Lake Drive', phone: '+880 1234-567803', hours: '9:00 AM - 9:00 PM' },
    { id: 15, position: [23.7500, 90.3600], name: 'Dhanmondi Lake Fix', address: '45/O, Lake Road', phone: '+880 1234-567804', hours: '8:00 AM - 10:00 PM' },
    { id: 16, position: [23.7900, 90.3800], name: 'Uttara Lake Point', address: '67/P, Lake View', phone: '+880 1234-567805', hours: '9:00 AM - 8:00 PM' },
    { id: 17, position: [23.7200, 90.3700], name: 'Green Road Tech', address: '89/Q, Green Road', phone: '+880 1234-567806', hours: '10:00 AM - 9:00 PM' },
    { id: 18, position: [23.7400, 90.4000], name: 'Tejgaon Device Hub', address: '12/R, Tejgaon I/A', phone: '+880 1234-567807', hours: '8:00 AM - 8:00 PM' },
    { id: 19, position: [23.7700, 90.3900], name: 'Kafrul Repair Center', address: '34/S, Kafrul', phone: '+880 1234-567808', hours: '9:00 AM - 9:00 PM' },
    { id: 20, position: [23.7100, 90.3800], name: 'Shahbag Tech Point', address: '56/T, Shahbag', phone: '+880 1234-567809', hours: '10:00 AM - 8:00 PM' },
    { id: 21, position: [23.7800, 90.4100], name: 'Kuratoli Repair Shop', address: '78/U, Kuratoli', phone: '+880 1234-567810', hours: '8:00 AM - 10:00 PM' },
    { id: 22, position: [23.8000, 90.3600], name: 'Airport Road Fix', address: '90/V, Airport Road', phone: '+880 1234-567811', hours: '9:00 AM - 9:00 PM' }
  ]);
  
  // Function to add a new shop
  const addShop = (shop) => {
    setShopPositions(prev => [...prev, { ...shop, id: Date.now() }]);
  };
  
  // Function to remove a shop
  const removeShop = (id) => {
    setShopPositions(prev => prev.filter(shop => shop.id !== id));
  };
  
  return (
    <div className="min-h-screen bg-base-200 pt-20">
      <div className="container mx-auto px-4 py-8">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-base-content mb-4">Find Our Shops</h1>
          <p className="text-lg text-base-content/70 max-w-2xl mx-auto">
            Visit any of our {shopPositions.length}+ repair shops across Dhaka. Click on the map to find your location or right-click to add a new shop.
          </p>
          <div className="alert alert-info max-w-2xl mx-auto mt-4">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="stroke-current shrink-0 w-6 h-6">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
            </svg>
            <div>
              <h3 className="font-bold">How to Use This Map</h3>
              <ul className="list-disc list-inside text-left mt-2">
                <li>Click anywhere on the map to locate yourself</li>
                <li>Right-click to add a new repair shop location</li>
                <li>All shop locations are saved dynamically and will persist during your session</li>
              </ul>
            </div>
          </div>
        </div>
        
        <div className="card bg-base-100 shadow-xl mb-8">
          <div className="card-body">
            <h2 className="card-title text-2xl mb-4">Our Locations</h2>
            <p className="text-base-content/80 mb-4">
              We have {shopPositions.length}+ repair shops across Dhaka for your convenience. Find the nearest one to you!
            </p>
            
            <div className="h-96 rounded-lg overflow-hidden mb-6">
              <MapContainer 
                center={[23.7465, 90.3762]} 
                zoom={12} 
                style={{ height: '100%', width: '100%' }}
                className="z-0"
              >
                <TileLayer
                  attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                  url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />
                <LocationMarker 
                  userPosition={userPosition} 
                  shopPositions={shopPositions} 
                  setUserPosition={setUserPosition} 
                  setShopPositions={setShopPositions} 
                />
              </MapContainer>
            </div>
            
            <div className="mb-6">
              <h3 className="text-xl font-semibold mb-4">All Repair Shops ({shopPositions.length})</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 max-h-60 overflow-y-auto p-2">
                {shopPositions.map(shop => (
                  <div key={shop.id} className="card bg-base-200 shadow">
                    <div className="card-body p-4">
                      <h4 className="font-bold">{shop.name}</h4>
                      <p className="text-sm">{shop.address}</p>
                      <p className="text-sm text-primary">{shop.phone}</p>
                      <div className="card-actions justify-end mt-2">
                        <button 
                          className="btn btn-xs btn-primary"
                          onClick={() => {
                            const map = document.querySelector('.leaflet-container')._leaflet_map;
                            map.setView(shop.position, 15);
                          }}
                        >
                          View on Map
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
        
        <div className="card bg-base-100 shadow-xl">
          <div className="card-body">
            <h2 className="card-title text-2xl mb-4">How to Find Our Shops</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="text-center">
                <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="h-8 w-8 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <h3 className="text-lg font-semibold mb-2">Using GPS</h3>
                <p className="text-base-content/70">Click on the map above to locate yourself and find the nearest shop.</p>
              </div>
              
              <div className="text-center">
                <div className="bg-secondary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="h-8 w-8 text-secondary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                  </svg>
                </div>
                <h3 className="text-lg font-semibold mb-2">Public Transport</h3>
                <p className="text-base-content/70">Most shops are accessible by bus or metro rail. Check local transport routes.</p>
              </div>
              
              <div className="text-center">
                <div className="bg-accent/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="h-8 w-8 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                  </svg>
                </div>
                <h3 className="text-lg font-semibold mb-2">Parking</h3>
                <p className="text-base-content/70">Most locations have nearby parking. Check individual shop details for specific information.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Location;