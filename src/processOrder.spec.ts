import { expect, describe, it } from 'vitest'
import { processOrder } from './processOrder'


describe('processOrder', () => {
  it('calculates order price without coupon', () => {
    const result = processOrder([
      { name: 'Book', price: 25, amount: 2},
      { name: 'Pen', price: 5, amount: 10},
    ])

    expect(result.orderPrice).toEqual(100)
    expect(result.discount).toEqual(0)
    expect(result.totalPrice).toEqual(100)
    expect(result.appliedCoupon).toBeNull()
  })

  it('applies 10% coupone when order price meets minimum', () => {
    const result = processOrder([
      { name: 'Book', price: 25, amount: 2},
      { name: 'Pen', price: 5, amount: 10},
    ], 
    'SAVE10'
  )
 
    expect(result.orderPrice).toEqual(100)
    expect(result.discount).toEqual(10)
    expect(result.totalPrice).toEqual(90)
    expect(result.appliedCoupon).toEqual('SAVE10')
  })


  it('applies SAVE10 coupone when order price exceeds minimum', () => {
    const result = processOrder([
      { name: 'Book', price: 45, amount: 3},
    ], 
    'SAVE10'
  )
 
    expect(result.orderPrice).toEqual(135)
    expect(result.discount).toEqual(13.5)
    expect(result.totalPrice).toEqual(121.5)
    expect(result.appliedCoupon).toEqual('SAVE10')
  })


  it('rejects invalid coupone code', () => {
    const result = processOrder([
      { name: 'Book', price: 300, amount: 1},
    ], 
    'TEST'
  )
 
    expect(result.orderPrice).toEqual(300)
    expect(result.discount).toEqual(0)
    expect(result.totalPrice).toEqual(300)
    expect(result.appliedCoupon).toBeNull()
  })


  it('applies 50% coupone when order price is more than minimum', () => {
    const result = processOrder([
      { name: 'Book', price: 500, amount: 1},
      { name: 'Pen', price: 1500, amount: 1},
    ], 
    'HALF'
  )
 
    expect(result.orderPrice).toEqual(2000)
    expect(result.discount).toEqual(1000)
    expect(result.totalPrice).toEqual(1000)
    expect(result.appliedCoupon).toEqual('HALF')
  })


  it('applies SAVE10 coupone when order price is more than minimum', () => {
    const result = processOrder([
      { name: 'Book', price: 1000, amount: 3},
    ], 
    'SAVE10'
  )
 
    expect(result.orderPrice).toEqual(3000)
    expect(result.discount).toEqual(300)
    expect(result.totalPrice).toEqual(2700)
    expect(result.appliedCoupon).toEqual('SAVE10')
  })


  it('applies HALF coupone when order price meets minimum', () => {
    const result = processOrder([
      { name: 'Book', price: 500, amount: 1},
    ], 
    'HALF'
  )
 
    expect(result.orderPrice).toEqual(500)
    expect(result.discount).toEqual(250)
    expect(result.totalPrice).toEqual(250)
    expect(result.appliedCoupon).toEqual('HALF')
  })

    it('calculates order price without coupon', () => {
    const result = processOrder([
      { name: 'Book', price: 25, amount: 2},
      { name: 'Pen', price: 5, amount: 10},
    ])

    expect(result.orderPrice).toEqual(100)
    expect(result.discount).toEqual(0)
    expect(result.totalPrice).toEqual(100)
    expect(result.appliedCoupon).toBeNull()
  })

  it('applies 10% coupone when order price meets minimum', () => {
    const result = processOrder([
      { name: 'Book', price: 25, amount: 2},
      { name: 'Pen', price: 5, amount: 10},
    ], 
    'SAVE10'
  )
 
    expect(result.orderPrice).toEqual(100)
    expect(result.discount).toEqual(10)
    expect(result.totalPrice).toEqual(90)
    expect(result.appliedCoupon).toEqual('SAVE10')
  })


  it('applies SAVE10 coupone when order price exceeds minimum', () => {
    const result = processOrder([
      { name: 'Book', price: 45, amount: 3},
    ], 
    'SAVE10'
  )
 
    expect(result.orderPrice).toEqual(135)
    expect(result.discount).toEqual(13.5)
    expect(result.totalPrice).toEqual(121.5)
    expect(result.appliedCoupon).toEqual('SAVE10')
  })


  it('rejects invalid coupone code', () => {
    const result = processOrder([
      { name: 'Book', price: 300, amount: 1},
    ], 
    'TEST'
  )
 
    expect(result.orderPrice).toEqual(300)
    expect(result.discount).toEqual(0)
    expect(result.totalPrice).toEqual(300)
    expect(result.appliedCoupon).toBeNull()
  })


  it('applies 50% coupone when order price is more than minimum', () => {
    const result = processOrder([
      { name: 'Book', price: 500, amount: 1},
      { name: 'Pen', price: 1500, amount: 1},
    ], 
    'HALF'
  )
 
    expect(result.orderPrice).toEqual(2000)
    expect(result.discount).toEqual(1000)
    expect(result.totalPrice).toEqual(1000)
    expect(result.appliedCoupon).toEqual('HALF')
  })


  it('applies SAVE10 coupone when order price is more than minimum', () => {
    const result = processOrder([
      { name: 'Book', price: 1000, amount: 3},
    ], 
    'SAVE10'
  )
 
    expect(result.orderPrice).toEqual(3000)
    expect(result.discount).toEqual(300)
    expect(result.totalPrice).toEqual(2700)
    expect(result.appliedCoupon).toEqual('SAVE10')
  })


  it('applies HALF coupone when order price meets minimum', () => {
    const result = processOrder([
      { name: 'Book', price: 500, amount: 1},
    ], 
    'HALF'
  )
 
    expect(result.orderPrice).toEqual(500)
    expect(result.discount).toEqual(250)
    expect(result.totalPrice).toEqual(250)
    expect(result.appliedCoupon).toEqual('HALF')
  })

    it('calculates order price without coupon', () => {
    const result = processOrder([
      { name: 'Book', price: 25, amount: 2},
      { name: 'Pen', price: 5, amount: 10},
    ])

    expect(result.orderPrice).toEqual(100)
    expect(result.discount).toEqual(0)
    expect(result.totalPrice).toEqual(100)
    expect(result.appliedCoupon).toBeNull()
  })

  it('applies 10% coupone when order price meets minimum', () => {
    const result = processOrder([
      { name: 'Book', price: 25, amount: 2},
      { name: 'Pen', price: 5, amount: 10},
    ], 
    'SAVE10'
  )
 
    expect(result.orderPrice).toEqual(100)
    expect(result.discount).toEqual(10)
    expect(result.totalPrice).toEqual(90)
    expect(result.appliedCoupon).toEqual('SAVE10')
  })


  it('applies SAVE10 coupone when order price exceeds minimum', () => {
    const result = processOrder([
      { name: 'Book', price: 45, amount: 3},
    ], 
    'SAVE10'
  )
 
    expect(result.orderPrice).toEqual(135)
    expect(result.discount).toEqual(13.5)
    expect(result.totalPrice).toEqual(121.5)
    expect(result.appliedCoupon).toEqual('SAVE10')
  })


  it('rejects invalid coupone code', () => {
    const result = processOrder([
      { name: 'Book', price: 300, amount: 1},
    ], 
    'TEST'
  )
 
    expect(result.orderPrice).toEqual(300)
    expect(result.discount).toEqual(0)
    expect(result.totalPrice).toEqual(300)
    expect(result.appliedCoupon).toBeNull()
  })


  it('applies 50% coupone when order price is more than minimum', () => {
    const result = processOrder([
      { name: 'Book', price: 500, amount: 1},
      { name: 'Pen', price: 1500, amount: 1},
    ], 
    'HALF'
  )
 
    expect(result.orderPrice).toEqual(2000)
    expect(result.discount).toEqual(1000)
    expect(result.totalPrice).toEqual(1000)
    expect(result.appliedCoupon).toEqual('HALF')
  })


  it('applies SAVE10 coupone when order price is more than minimum', () => {
    const result = processOrder([
      { name: 'Book', price: 1000, amount: 3},
    ], 
    'SAVE10'
  )
 
    expect(result.orderPrice).toEqual(3000)
    expect(result.discount).toEqual(300)
    expect(result.totalPrice).toEqual(2700)
    expect(result.appliedCoupon).toEqual('SAVE10')
  })


  it('applies HALF coupone when order price meets minimum', () => {
    const result = processOrder([
      { name: 'Book', price: 500, amount: 1},
    ], 
    'HALF'
  )
 
    expect(result.orderPrice).toEqual(500)
    expect(result.discount).toEqual(250)
    expect(result.totalPrice).toEqual(250)
    expect(result.appliedCoupon).toEqual('HALF')
  })
  it('calculates order price without coupon', () => {
    const result = processOrder([
      { name: 'Book', price: 25, amount: 2},
      { name: 'Pen', price: 5, amount: 10},
    ])

    expect(result.orderPrice).toEqual(100)
    expect(result.discount).toEqual(0)
    expect(result.totalPrice).toEqual(100)
    expect(result.appliedCoupon).toBeNull()
  })

  it('applies 10% coupone when order price meets minimum', () => {
    const result = processOrder([
      { name: 'Book', price: 25, amount: 2},
      { name: 'Pen', price: 5, amount: 10},
    ], 
    'SAVE10'
  )
 
    expect(result.orderPrice).toEqual(100)
    expect(result.discount).toEqual(10)
    expect(result.totalPrice).toEqual(90)
    expect(result.appliedCoupon).toEqual('SAVE10')
  })


  it('applies SAVE10 coupone when order price exceeds minimum', () => {
    const result = processOrder([
      { name: 'Book', price: 45, amount: 3},
    ], 
    'SAVE10'
  )
 
    expect(result.orderPrice).toEqual(135)
    expect(result.discount).toEqual(13.5)
    expect(result.totalPrice).toEqual(121.5)
    expect(result.appliedCoupon).toEqual('SAVE10')
  })


  it('rejects invalid coupone code', () => {
    const result = processOrder([
      { name: 'Book', price: 300, amount: 1},
    ], 
    'TEST'
  )
 
    expect(result.orderPrice).toEqual(300)
    expect(result.discount).toEqual(0)
    expect(result.totalPrice).toEqual(300)
    expect(result.appliedCoupon).toBeNull()
  })


  it('applies 50% coupone when order price is more than minimum', () => {
    const result = processOrder([
      { name: 'Book', price: 500, amount: 1},
      { name: 'Pen', price: 1500, amount: 1},
    ], 
    'HALF'
  )
 
    expect(result.orderPrice).toEqual(2000)
    expect(result.discount).toEqual(1000)
    expect(result.totalPrice).toEqual(1000)
    expect(result.appliedCoupon).toEqual('HALF')
  })


  it('applies SAVE10 coupone when order price is more than minimum', () => {
    const result = processOrder([
      { name: 'Book', price: 1000, amount: 3},
    ], 
    'SAVE10'
  )
 
    expect(result.orderPrice).toEqual(3000)
    expect(result.discount).toEqual(300)
    expect(result.totalPrice).toEqual(2700)
    expect(result.appliedCoupon).toEqual('SAVE10')
  })


  it('applies HALF coupone when order price meets minimum', () => {
    const result = processOrder([
      { name: 'Book', price: 500, amount: 1},
    ], 
    'HALF'
  )
 
    expect(result.orderPrice).toEqual(500)
    expect(result.discount).toEqual(250)
    expect(result.totalPrice).toEqual(250)
    expect(result.appliedCoupon).toEqual('HALF')
  })
  it('calculates order price without coupon', () => {
    const result = processOrder([
      { name: 'Book', price: 25, amount: 2},
      { name: 'Pen', price: 5, amount: 10},
    ])

    expect(result.orderPrice).toEqual(100)
    expect(result.discount).toEqual(0)
    expect(result.totalPrice).toEqual(100)
    expect(result.appliedCoupon).toBeNull()
  })

  it('applies 10% coupone when order price meets minimum', () => {
    const result = processOrder([
      { name: 'Book', price: 25, amount: 2},
      { name: 'Pen', price: 5, amount: 10},
    ], 
    'SAVE10'
  )
 
    expect(result.orderPrice).toEqual(100)
    expect(result.discount).toEqual(10)
    expect(result.totalPrice).toEqual(90)
    expect(result.appliedCoupon).toEqual('SAVE10')
  })


  it('applies SAVE10 coupone when order price exceeds minimum', () => {
    const result = processOrder([
      { name: 'Book', price: 45, amount: 3},
    ], 
    'SAVE10'
  )
 
    expect(result.orderPrice).toEqual(135)
    expect(result.discount).toEqual(13.5)
    expect(result.totalPrice).toEqual(121.5)
    expect(result.appliedCoupon).toEqual('SAVE10')
  })


  it('rejects invalid coupone code', () => {
    const result = processOrder([
      { name: 'Book', price: 300, amount: 1},
    ], 
    'TEST'
  )
 
    expect(result.orderPrice).toEqual(300)
    expect(result.discount).toEqual(0)
    expect(result.totalPrice).toEqual(300)
    expect(result.appliedCoupon).toBeNull()
  })


  it('applies 50% coupone when order price is more than minimum', () => {
    const result = processOrder([
      { name: 'Book', price: 500, amount: 1},
      { name: 'Pen', price: 1500, amount: 1},
    ], 
    'HALF'
  )
 
    expect(result.orderPrice).toEqual(2000)
    expect(result.discount).toEqual(1000)
    expect(result.totalPrice).toEqual(1000)
    expect(result.appliedCoupon).toEqual('HALF')
  })


  it('applies SAVE10 coupone when order price is more than minimum', () => {
    const result = processOrder([
      { name: 'Book', price: 1000, amount: 3},
    ], 
    'SAVE10'
  )
 
    expect(result.orderPrice).toEqual(3000)
    expect(result.discount).toEqual(300)
    expect(result.totalPrice).toEqual(2700)
    expect(result.appliedCoupon).toEqual('SAVE10')
  })


  it('applies HALF coupone when order price meets minimum', () => {
    const result = processOrder([
      { name: 'Book', price: 500, amount: 1},
    ], 
    'HALF'
  )
 
    expect(result.orderPrice).toEqual(500)
    expect(result.discount).toEqual(250)
    expect(result.totalPrice).toEqual(250)
    expect(result.appliedCoupon).toEqual('HALF')
  })
  it('calculates order price without coupon', () => {
    const result = processOrder([
      { name: 'Book', price: 25, amount: 2},
      { name: 'Pen', price: 5, amount: 10},
    ])

    expect(result.orderPrice).toEqual(100)
    expect(result.discount).toEqual(0)
    expect(result.totalPrice).toEqual(100)
    expect(result.appliedCoupon).toBeNull()
  })

  it('applies 10% coupone when order price meets minimum', () => {
    const result = processOrder([
      { name: 'Book', price: 25, amount: 2},
      { name: 'Pen', price: 5, amount: 10},
    ], 
    'SAVE10'
  )
 
    expect(result.orderPrice).toEqual(100)
    expect(result.discount).toEqual(10)
    expect(result.totalPrice).toEqual(90)
    expect(result.appliedCoupon).toEqual('SAVE10')
  })


  it('applies SAVE10 coupone when order price exceeds minimum', () => {
    const result = processOrder([
      { name: 'Book', price: 45, amount: 3},
    ], 
    'SAVE10'
  )
 
    expect(result.orderPrice).toEqual(135)
    expect(result.discount).toEqual(13.5)
    expect(result.totalPrice).toEqual(121.5)
    expect(result.appliedCoupon).toEqual('SAVE10')
  })


  it('rejects invalid coupone code', () => {
    const result = processOrder([
      { name: 'Book', price: 300, amount: 1},
    ], 
    'TEST'
  )
 
    expect(result.orderPrice).toEqual(300)
    expect(result.discount).toEqual(0)
    expect(result.totalPrice).toEqual(300)
    expect(result.appliedCoupon).toBeNull()
  })


  it('applies 50% coupone when order price is more than minimum', () => {
    const result = processOrder([
      { name: 'Book', price: 500, amount: 1},
      { name: 'Pen', price: 1500, amount: 1},
    ], 
    'HALF'
  )
 
    expect(result.orderPrice).toEqual(2000)
    expect(result.discount).toEqual(1000)
    expect(result.totalPrice).toEqual(1000)
    expect(result.appliedCoupon).toEqual('HALF')
  })


  it('applies SAVE10 coupone when order price is more than minimum', () => {
    const result = processOrder([
      { name: 'Book', price: 1000, amount: 3},
    ], 
    'SAVE10'
  )
 
    expect(result.orderPrice).toEqual(3000)
    expect(result.discount).toEqual(300)
    expect(result.totalPrice).toEqual(2700)
    expect(result.appliedCoupon).toEqual('SAVE10')
  })


  it('applies HALF coupone when order price meets minimum', () => {
    const result = processOrder([
      { name: 'Book', price: 500, amount: 1},
    ], 
    'HALF'
  )
 
    expect(result.orderPrice).toEqual(500)
    expect(result.discount).toEqual(250)
    expect(result.totalPrice).toEqual(250)
    expect(result.appliedCoupon).toEqual('HALF')
  })


    it('calculates order price without coupon', () => {
    const result = processOrder([
      { name: 'Book', price: 25, amount: 2},
      { name: 'Pen', price: 5, amount: 10},
    ])

    expect(result.orderPrice).toEqual(100)
    expect(result.discount).toEqual(0)
    expect(result.totalPrice).toEqual(100)
    expect(result.appliedCoupon).toBeNull()
  })

  it('applies 10% coupone when order price meets minimum', () => {
    const result = processOrder([
      { name: 'Book', price: 25, amount: 2},
      { name: 'Pen', price: 5, amount: 10},
    ], 
    'SAVE10'
  )
 
    expect(result.orderPrice).toEqual(100)
    expect(result.discount).toEqual(10)
    expect(result.totalPrice).toEqual(90)
    expect(result.appliedCoupon).toEqual('SAVE10')
  })


  it('applies SAVE10 coupone when order price exceeds minimum', () => {
    const result = processOrder([
      { name: 'Book', price: 45, amount: 3},
    ], 
    'SAVE10'
  )
 
    expect(result.orderPrice).toEqual(135)
    expect(result.discount).toEqual(13.5)
    expect(result.totalPrice).toEqual(121.5)
    expect(result.appliedCoupon).toEqual('SAVE10')
  })


  it('rejects invalid coupone code', () => {
    const result = processOrder([
      { name: 'Book', price: 300, amount: 1},
    ], 
    'TEST'
  )
 
    expect(result.orderPrice).toEqual(300)
    expect(result.discount).toEqual(0)
    expect(result.totalPrice).toEqual(300)
    expect(result.appliedCoupon).toBeNull()
  })


  it('applies 50% coupone when order price is more than minimum', () => {
    const result = processOrder([
      { name: 'Book', price: 500, amount: 1},
      { name: 'Pen', price: 1500, amount: 1},
    ], 
    'HALF'
  )
 
    expect(result.orderPrice).toEqual(2000)
    expect(result.discount).toEqual(1000)
    expect(result.totalPrice).toEqual(1000)
    expect(result.appliedCoupon).toEqual('HALF')
  })


  it('applies SAVE10 coupone when order price is more than minimum', () => {
    const result = processOrder([
      { name: 'Book', price: 1000, amount: 3},
    ], 
    'SAVE10'
  )
 
    expect(result.orderPrice).toEqual(3000)
    expect(result.discount).toEqual(300)
    expect(result.totalPrice).toEqual(2700)
    expect(result.appliedCoupon).toEqual('SAVE10')
  })


  it('applies HALF coupone when order price meets minimum', () => {
    const result = processOrder([
      { name: 'Book', price: 500, amount: 1},
    ], 
    'HALF'
  )
 
    expect(result.orderPrice).toEqual(500)
    expect(result.discount).toEqual(250)
    expect(result.totalPrice).toEqual(250)
    expect(result.appliedCoupon).toEqual('HALF')
  })
  it('calculates order price without coupon', () => {
    const result = processOrder([
      { name: 'Book', price: 25, amount: 2},
      { name: 'Pen', price: 5, amount: 10},
    ])

    expect(result.orderPrice).toEqual(100)
    expect(result.discount).toEqual(0)
    expect(result.totalPrice).toEqual(100)
    expect(result.appliedCoupon).toBeNull()
  })

  it('applies 10% coupone when order price meets minimum', () => {
    const result = processOrder([
      { name: 'Book', price: 25, amount: 2},
      { name: 'Pen', price: 5, amount: 10},
    ], 
    'SAVE10'
  )
 
    expect(result.orderPrice).toEqual(100)
    expect(result.discount).toEqual(10)
    expect(result.totalPrice).toEqual(90)
    expect(result.appliedCoupon).toEqual('SAVE10')
  })


  it('applies SAVE10 coupone when order price exceeds minimum', () => {
    const result = processOrder([
      { name: 'Book', price: 45, amount: 3},
    ], 
    'SAVE10'
  )
 
    expect(result.orderPrice).toEqual(135)
    expect(result.discount).toEqual(13.5)
    expect(result.totalPrice).toEqual(121.5)
    expect(result.appliedCoupon).toEqual('SAVE10')
  })


  it('rejects invalid coupone code', () => {
    const result = processOrder([
      { name: 'Book', price: 300, amount: 1},
    ], 
    'TEST'
  )
 
    expect(result.orderPrice).toEqual(300)
    expect(result.discount).toEqual(0)
    expect(result.totalPrice).toEqual(300)
    expect(result.appliedCoupon).toBeNull()
  })


  it('applies 50% coupone when order price is more than minimum', () => {
    const result = processOrder([
      { name: 'Book', price: 500, amount: 1},
      { name: 'Pen', price: 1500, amount: 1},
    ], 
    'HALF'
  )
 
    expect(result.orderPrice).toEqual(2000)
    expect(result.discount).toEqual(1000)
    expect(result.totalPrice).toEqual(1000)
    expect(result.appliedCoupon).toEqual('HALF')
  })


  it('applies SAVE10 coupone when order price is more than minimum', () => {
    const result = processOrder([
      { name: 'Book', price: 1000, amount: 3},
    ], 
    'SAVE10'
  )
 
    expect(result.orderPrice).toEqual(3000)
    expect(result.discount).toEqual(300)
    expect(result.totalPrice).toEqual(2700)
    expect(result.appliedCoupon).toEqual('SAVE10')
  })


  it('applies HALF coupone when order price meets minimum', () => {
    const result = processOrder([
      { name: 'Book', price: 500, amount: 1},
    ], 
    'HALF'
  )
 
    expect(result.orderPrice).toEqual(500)
    expect(result.discount).toEqual(250)
    expect(result.totalPrice).toEqual(250)
    expect(result.appliedCoupon).toEqual('HALF')
  })
  it('calculates order price without coupon', () => {
    const result = processOrder([
      { name: 'Book', price: 25, amount: 2},
      { name: 'Pen', price: 5, amount: 10},
    ])

    expect(result.orderPrice).toEqual(100)
    expect(result.discount).toEqual(0)
    expect(result.totalPrice).toEqual(100)
    expect(result.appliedCoupon).toBeNull()
  })

  it('applies 10% coupone when order price meets minimum', () => {
    const result = processOrder([
      { name: 'Book', price: 25, amount: 2},
      { name: 'Pen', price: 5, amount: 10},
    ], 
    'SAVE10'
  )
 
    expect(result.orderPrice).toEqual(100)
    expect(result.discount).toEqual(10)
    expect(result.totalPrice).toEqual(90)
    expect(result.appliedCoupon).toEqual('SAVE10')
  })


  it('applies SAVE10 coupone when order price exceeds minimum', () => {
    const result = processOrder([
      { name: 'Book', price: 45, amount: 3},
    ], 
    'SAVE10'
  )
 
    expect(result.orderPrice).toEqual(135)
    expect(result.discount).toEqual(13.5)
    expect(result.totalPrice).toEqual(121.5)
    expect(result.appliedCoupon).toEqual('SAVE10')
  })


  it('rejects invalid coupone code', () => {
    const result = processOrder([
      { name: 'Book', price: 300, amount: 1},
    ], 
    'TEST'
  )
 
    expect(result.orderPrice).toEqual(300)
    expect(result.discount).toEqual(0)
    expect(result.totalPrice).toEqual(300)
    expect(result.appliedCoupon).toBeNull()
  })


  it('applies 50% coupone when order price is more than minimum', () => {
    const result = processOrder([
      { name: 'Book', price: 500, amount: 1},
      { name: 'Pen', price: 1500, amount: 1},
    ], 
    'HALF'
  )
 
    expect(result.orderPrice).toEqual(2000)
    expect(result.discount).toEqual(1000)
    expect(result.totalPrice).toEqual(1000)
    expect(result.appliedCoupon).toEqual('HALF')
  })


  it('applies SAVE10 coupone when order price is more than minimum', () => {
    const result = processOrder([
      { name: 'Book', price: 1000, amount: 3},
    ], 
    'SAVE10'
  )
 
    expect(result.orderPrice).toEqual(3000)
    expect(result.discount).toEqual(300)
    expect(result.totalPrice).toEqual(2700)
    expect(result.appliedCoupon).toEqual('SAVE10')
  })


  it('applies HALF coupone when order price meets minimum', () => {
    const result = processOrder([
      { name: 'Book', price: 500, amount: 1},
    ], 
    'HALF'
  )
 
    expect(result.orderPrice).toEqual(500)
    expect(result.discount).toEqual(250)
    expect(result.totalPrice).toEqual(250)
    expect(result.appliedCoupon).toEqual('HALF')
  })
  it('calculates order price without coupon', () => {
    const result = processOrder([
      { name: 'Book', price: 25, amount: 2},
      { name: 'Pen', price: 5, amount: 10},
    ])

    expect(result.orderPrice).toEqual(100)
    expect(result.discount).toEqual(0)
    expect(result.totalPrice).toEqual(100)
    expect(result.appliedCoupon).toBeNull()
  })

  it('applies 10% coupone when order price meets minimum', () => {
    const result = processOrder([
      { name: 'Book', price: 25, amount: 2},
      { name: 'Pen', price: 5, amount: 10},
    ], 
    'SAVE10'
  )
 
    expect(result.orderPrice).toEqual(100)
    expect(result.discount).toEqual(10)
    expect(result.totalPrice).toEqual(90)
    expect(result.appliedCoupon).toEqual('SAVE10')
  })


  it('applies SAVE10 coupone when order price exceeds minimum', () => {
    const result = processOrder([
      { name: 'Book', price: 45, amount: 3},
    ], 
    'SAVE10'
  )
 
    expect(result.orderPrice).toEqual(135)
    expect(result.discount).toEqual(13.5)
    expect(result.totalPrice).toEqual(121.5)
    expect(result.appliedCoupon).toEqual('SAVE10')
  })


  it('rejects invalid coupone code', () => {
    const result = processOrder([
      { name: 'Book', price: 300, amount: 1},
    ], 
    'TEST'
  )
 
    expect(result.orderPrice).toEqual(300)
    expect(result.discount).toEqual(0)
    expect(result.totalPrice).toEqual(300)
    expect(result.appliedCoupon).toBeNull()
  })


  it('applies 50% coupone when order price is more than minimum', () => {
    const result = processOrder([
      { name: 'Book', price: 500, amount: 1},
      { name: 'Pen', price: 1500, amount: 1},
    ], 
    'HALF'
  )
 
    expect(result.orderPrice).toEqual(2000)
    expect(result.discount).toEqual(1000)
    expect(result.totalPrice).toEqual(1000)
    expect(result.appliedCoupon).toEqual('HALF')
  })


  it('applies SAVE10 coupone when order price is more than minimum', () => {
    const result = processOrder([
      { name: 'Book', price: 1000, amount: 3},
    ], 
    'SAVE10'
  )
 
    expect(result.orderPrice).toEqual(3000)
    expect(result.discount).toEqual(300)
    expect(result.totalPrice).toEqual(2700)
    expect(result.appliedCoupon).toEqual('SAVE10')
  })


  it('applies HALF coupone when order price meets minimum', () => {
    const result = processOrder([
      { name: 'Book', price: 500, amount: 1},
    ], 
    'HALF'
  )
 
    expect(result.orderPrice).toEqual(500)
    expect(result.discount).toEqual(250)
    expect(result.totalPrice).toEqual(250)
    expect(result.appliedCoupon).toEqual('HALF')
  })
  it('calculates order price without coupon', () => {
    const result = processOrder([
      { name: 'Book', price: 25, amount: 2},
      { name: 'Pen', price: 5, amount: 10},
    ])

    expect(result.orderPrice).toEqual(100)
    expect(result.discount).toEqual(0)
    expect(result.totalPrice).toEqual(100)
    expect(result.appliedCoupon).toBeNull()
  })

  it('applies 10% coupone when order price meets minimum', () => {
    const result = processOrder([
      { name: 'Book', price: 25, amount: 2},
      { name: 'Pen', price: 5, amount: 10},
    ], 
    'SAVE10'
  )
 
    expect(result.orderPrice).toEqual(100)
    expect(result.discount).toEqual(10)
    expect(result.totalPrice).toEqual(90)
    expect(result.appliedCoupon).toEqual('SAVE10')
  })


  it('applies SAVE10 coupone when order price exceeds minimum', () => {
    const result = processOrder([
      { name: 'Book', price: 45, amount: 3},
    ], 
    'SAVE10'
  )
 
    expect(result.orderPrice).toEqual(135)
    expect(result.discount).toEqual(13.5)
    expect(result.totalPrice).toEqual(121.5)
    expect(result.appliedCoupon).toEqual('SAVE10')
  })


  it('rejects invalid coupone code', () => {
    const result = processOrder([
      { name: 'Book', price: 300, amount: 1},
    ], 
    'TEST'
  )
 
    expect(result.orderPrice).toEqual(300)
    expect(result.discount).toEqual(0)
    expect(result.totalPrice).toEqual(300)
    expect(result.appliedCoupon).toBeNull()
  })


  it('applies 50% coupone when order price is more than minimum', () => {
    const result = processOrder([
      { name: 'Book', price: 500, amount: 1},
      { name: 'Pen', price: 1500, amount: 1},
    ], 
    'HALF'
  )
 
    expect(result.orderPrice).toEqual(2000)
    expect(result.discount).toEqual(1000)
    expect(result.totalPrice).toEqual(1000)
    expect(result.appliedCoupon).toEqual('HALF')
  })


  it('applies SAVE10 coupone when order price is more than minimum', () => {
    const result = processOrder([
      { name: 'Book', price: 1000, amount: 3},
    ], 
    'SAVE10'
  )
 
    expect(result.orderPrice).toEqual(3000)
    expect(result.discount).toEqual(300)
    expect(result.totalPrice).toEqual(2700)
    expect(result.appliedCoupon).toEqual('SAVE10')
  })


  it('applies HALF coupone when order price meets minimum', () => {
    const result = processOrder([
      { name: 'Book', price: 500, amount: 1},
    ], 
    'HALF'
  )
 
    expect(result.orderPrice).toEqual(500)
    expect(result.discount).toEqual(250)
    expect(result.totalPrice).toEqual(250)
    expect(result.appliedCoupon).toEqual('HALF')
  })
  it('calculates order price without coupon', () => {
    const result = processOrder([
      { name: 'Book', price: 25, amount: 2},
      { name: 'Pen', price: 5, amount: 10},
    ])

    expect(result.orderPrice).toEqual(100)
    expect(result.discount).toEqual(0)
    expect(result.totalPrice).toEqual(100)
    expect(result.appliedCoupon).toBeNull()
  })

  it('applies 10% coupone when order price meets minimum', () => {
    const result = processOrder([
      { name: 'Book', price: 25, amount: 2},
      { name: 'Pen', price: 5, amount: 10},
    ], 
    'SAVE10'
  )
 
    expect(result.orderPrice).toEqual(100)
    expect(result.discount).toEqual(10)
    expect(result.totalPrice).toEqual(90)
    expect(result.appliedCoupon).toEqual('SAVE10')
  })


  it('applies SAVE10 coupone when order price exceeds minimum', () => {
    const result = processOrder([
      { name: 'Book', price: 45, amount: 3},
    ], 
    'SAVE10'
  )
 
    expect(result.orderPrice).toEqual(135)
    expect(result.discount).toEqual(13.5)
    expect(result.totalPrice).toEqual(121.5)
    expect(result.appliedCoupon).toEqual('SAVE10')
  })


  it('rejects invalid coupone code', () => {
    const result = processOrder([
      { name: 'Book', price: 300, amount: 1},
    ], 
    'TEST'
  )
 
    expect(result.orderPrice).toEqual(300)
    expect(result.discount).toEqual(0)
    expect(result.totalPrice).toEqual(300)
    expect(result.appliedCoupon).toBeNull()
  })


  it('applies 50% coupone when order price is more than minimum', () => {
    const result = processOrder([
      { name: 'Book', price: 500, amount: 1},
      { name: 'Pen', price: 1500, amount: 1},
    ], 
    'HALF'
  )
 
    expect(result.orderPrice).toEqual(2000)
    expect(result.discount).toEqual(1000)
    expect(result.totalPrice).toEqual(1000)
    expect(result.appliedCoupon).toEqual('HALF')
  })


  it('applies SAVE10 coupone when order price is more than minimum', () => {
    const result = processOrder([
      { name: 'Book', price: 1000, amount: 3},
    ], 
    'SAVE10'
  )
 
    expect(result.orderPrice).toEqual(3000)
    expect(result.discount).toEqual(300)
    expect(result.totalPrice).toEqual(2700)
    expect(result.appliedCoupon).toEqual('SAVE10')
  })


  it('applies HALF coupone when order price meets minimum', () => {
    const result = processOrder([
      { name: 'Book', price: 500, amount: 1},
    ], 
    'HALF'
  )
 
    expect(result.orderPrice).toEqual(500)
    expect(result.discount).toEqual(250)
    expect(result.totalPrice).toEqual(250)
    expect(result.appliedCoupon).toEqual('HALF')
  })

})