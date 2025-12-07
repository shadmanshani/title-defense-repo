# How to Fix Booking.jsx

## Step 1: Add imports at the TOP of the file (after line 2)

Add these 4 lines:
```javascript
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useAuth } from '../Context/AuthContext';
import { createOrder } from '../../utils/orderDB';
```

## Step 2: Add useAuth hook (after line 5, inside the Booking component)

Add this line:
```javascript
const { user } = useAuth();
```

## Step 3: Replace the handleSubmitBooking function (find it around line 105-115)

**FIND THIS:**
```javascript
const handleSubmitBooking = async () => {
    setIsSubmitting(true);
    
    // Simulate API call
    setTimeout(() => {
        const newBookingId = 'BK' + Date.now().toString().slice(-6);
        setBookingId(newBookingId);
        setBookingConfirmed(true);
        setIsSubmitting(false);
    }, 2000);
};
```

**REPLACE WITH THIS:**
```javascript
const handleSubmitBooking = async () => {
    setIsSubmitting(true);
    
    // Simulate API call
    setTimeout(() => {
        const newBookingId = 'BK' + Date.now().toString().slice(-6);
        setBookingId(newBookingId);
        
        // Save order to localStorage
        const orderData = {
            ...bookingData,
            bookingId: newBookingId
        };
        createOrder(orderData, user);
        
        // Show success toast
        toast.success('🎉 Booking confirmed! You can track your order now.', {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
        });
        
        setBookingConfirmed(true);
        setIsSubmitting(false);
    }, 2000);
};
```

## Step 4: Add ToastContainer at the END (before the last closing </div>, around line 550)

**FIND:**
```javascript
            </div>
        </div>
    );
};

export default Booking;
```

**CHANGE TO:**
```javascript
            </div>
            <ToastContainer />
        </div>
    );
};

export default Booking;
```

## That's it! Save the file and refresh your browser.
