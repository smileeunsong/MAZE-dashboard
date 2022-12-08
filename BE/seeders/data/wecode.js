const orderList = [
  {
    "orderID": "20221129000029", //* 주문 번호
    "storeID": 1, //* 상점 아이디(1번만 나열)
    "guestID": 16, //* 손님 번호(그날 1번부터 시작)
    "storeName": "밸런스포인트", //* 상점 이름
    "about": "핸드드립 1개", //* 주문 요약
    "ETA": 10, //* 손님이 정하는 예상 도착 시간(분 단위)
    "cancelReason": null, //* 주문이 취소됐다면 취소 사유
    "state": 3, //* 주문 상태
    //* 0: 접수 대기(결제 완료), 1: 접수 완료, 2: 준비 완료, 3: 수령 완료
    //* 4: 결제 취소(유저가 진행한 취소)
    //* 5: 접수 취소(점주 혹은 서버가 '접수 대기' 상태의 주문을 취소함)
    //* 6: 접수 취소(점주 혹은 서버가 '접수 완료' 상태의 주문을 취소함)
    "day": 1669705622444, //* 결제 시간 unixTime
    "items": [ //* 주문 메뉴 리스트
      {
        "mID": 4, //* 메뉴 고유 아이디
        "name": "핸드드립", //* 메뉴 명
        "won": 5000, //* 메뉴 가격
        "num": 1, //* 메뉴 개수
        "type": "포장" //* 포장인지 매장인지
      }
    ]
  },
  {
    "orderID": "20221129000028", // orders (order_number)
    "storeID": 1, // orders(store_id), stores(stores_id)
    "guestID": 15, // orders(guest_number)
    "storeName": "밸런스포인트", //* stores(name)
    "about": "바닐라라떼 1개", // orders (about)
    "ETA": 10, // orders (eta)
    "cancelReason": null, // orders(cancel)
    "state": 3, // orders (state_id)
    "day": 1669705571834, // orders (unix time)
    "items": [
      {
        "mID": 10, //* item_id
        "name": "바닐라라떼", //* items
        "won": 4500, //* items
        "num": 1, // orders
        "type": "포장"
        // enum (Object.freeze 처리)
      }
    ]
  },
  {
    "orderID": "20221129000027",
    "storeID": 1,
    "guestID": 14,
    "storeName": "밸런스포인트",
    "about": "플랫화이트 1개",
    "ETA": 10,
    "cancelReason": null,
    "state": 3,
    "day": 1669705480996,
    "items": [
      {
        "mID": 8,
        "name": "플랫화이트",
        "won": 4500,
        "num": 1,
        "type": "포장"
      }
    ]
  },
  {
    "orderID": "20221129000025",
    "storeID": 1,
    "guestID": 13,
    "storeName": "밸런스포인트",
    "about": "에스프레소 1개",
    "ETA": 10,
    "cancelReason": null,
    "state": 3,
    "day": 1669704840283,
    "items": [
      {
        "mID": 5,
        "name": "에스프레소",
        "won": 3500,
        "num": 1,
        "type": "포장"
      }
    ]
  },
  {
    "orderID": "20221129000024",
    "storeID": 1,
    "guestID": 12,
    "storeName": "밸런스포인트",
    "about": "에스프레소 1개",
    "ETA": 10,
    "cancelReason": null,
    "state": 3,
    "day": 1669704801899,
    "items": [
      {
        "mID": 5,
        "name": "에스프레소",
        "won": 3500,
        "num": 1,
        "type": "포장"
      }
    ]
  },
  {
    "orderID": "20221129000023",
    "storeID": 1,
    "guestID": 11,
    "storeName": "밸런스포인트",
    "about": "에스프레소 1개",
    "ETA": 10,
    "cancelReason": null,
    "state": 3,
    "day": 1669704758152,
    "items": [
      {
        "mID": 5,
        "name": "에스프레소",
        "won": 3500,
        "num": 1,
        "type": "포장"
      }
    ]
  },
  {
    "orderID": "20221129000022",
    "storeID": 1,
    "guestID": 10,
    "storeName": "밸런스포인트",
    "about": "에스프레소 1개",
    "ETA": 10,
    "cancelReason": null,
    "state": 3,
    "day": 1669704658292,
    "items": [
      {
        "mID": 5,
        "name": "에스프레소",
        "won": 3500,
        "num": 1,
        "type": "포장"
      }
    ]
  },
  {
    "orderID": "20221129000021",
    "storeID": 1,
    "guestID": 9,
    "storeName": "밸런스포인트",
    "about": "에스프레소 1개",
    "ETA": 10,
    "cancelReason": null,
    "state": 3,
    "day": 1669704443645,
    "items": [
      {
        "mID": 5,
        "name": "에스프레소",
        "won": 3500,
        "num": 1,
        "type": "포장"
      }
    ]
  },
  {
    "orderID": "20221129000020",
    "storeID": 1,
    "guestID": 8,
    "storeName": "밸런스포인트",
    "about": "에스프레소 1개",
    "ETA": 10,
    "cancelReason": null,
    "state": 3,
    "day": 1669704368575,
    "items": [
      {
        "mID": 5,
        "name": "에스프레소",
        "won": 3500,
        "num": 1,
        "type": "포장"
      }
    ]
  },
  {
    "orderID": "20221129000016",
    "storeID": 1,
    "guestID": 7,
    "storeName": "밸런스포인트",
    "about": "에스프레소 1개",
    "ETA": 10,
    "cancelReason": null,
    "state": 3,
    "day": 1669704148128,
    "items": [
      {
        "mID": 5,
        "name": "에스프레소",
        "won": 3500,
        "num": 1,
        "type": "포장"
      }
    ]
  },
  {
    "orderID": "20221129000015",
    "storeID": 1,
    "guestID": 6,
    "storeName": "밸런스포인트",
    "about": "에스프레소 1개",
    "ETA": 10,
    "cancelReason": null,
    "state": 3,
    "day": 1669704031634,
    "items": [
      {
        "mID": 5,
        "name": "에스프레소",
        "won": 3500,
        "num": 1,
        "type": "포장"
      }
    ]
  },
  {
    "orderID": "20221129000014",
    "storeID": 1,
    "guestID": 5,
    "storeName": "밸런스포인트",
    "about": "에스프레소 1개",
    "ETA": 10,
    "cancelReason": null,
    "state": 3,
    "day": 1669703670392,
    "items": [
      {
        "mID": 5,
        "name": "에스프레소",
        "won": 3500,
        "num": 1,
        "type": "포장"
      }
    ]
  },
  {
    "orderID": "20221129000013",
    "storeID": 1,
    "guestID": 4,
    "storeName": "밸런스포인트",
    "about": "에스프레소 1개",
    "ETA": 10,
    "cancelReason": null,
    "state": 3,
    "day": 1669703438659,
    "items": [
      {
        "mID": 5,
        "name": "에스프레소",
        "won": 3500,
        "num": 1,
        "type": "포장"
      }
    ]
  },
  {
    "orderID": "20221129000006",
    "storeID": 1,
    "guestID": 3,
    "storeName": "밸런스포인트",
    "about": "오늘의 핸드드립 커피 1개",
    "ETA": 10,
    "cancelReason": null,
    "state": 3,
    "day": 1669702235682,
    "items": [
      {
        "mID": 1,
        "name": "오늘의 핸드드립 커피",
        "won": 3500,
        "num": 1,
        "type": "포장"
      }
    ]
  },
  {
    "orderID": "20221129000003",
    "storeID": 1,
    "guestID": 2,
    "storeName": "밸런스포인트",
    "about": "에스프레소 1개",
    "ETA": 10,
    "cancelReason": null,
    "state": 3,
    "day": 1669679367632,
    "items": [
      {
        "mID": 5,
        "name": "에스프레소",
        "won": 3500,
        "num": 1,
        "type": "포장"
      }
    ]
  },
  {
    "orderID": "20221129000001",
    "storeID": 1,
    "guestID": 1,
    "storeName": "밸런스포인트",
    "about": "오늘의 핸드드립 커피 3개",
    "ETA": 10,
    "cancelReason": null,
    "state": 3,
    "day": 1669667922606,
    "items": [
      {
        "mID": 1,
        "name": "오늘의 핸드드립 커피",
        "won": 3500,
        "num": 3,
        "type": "매장"
      }
    ]
  },
  {
    "orderID": "20221128000018",
    "storeID": 1,
    "guestID": 2,
    "storeName": "밸런스포인트",
    "about": "오늘의 핸드드립 커피 1개",
    "ETA": 10,
    "cancelReason": null,
    "state": 3,
    "day": 1669617614125,
    "items": [
      {
        "mID": 1,
        "name": "오늘의 핸드드립 커피",
        "won": 3500,
        "num": 1,
        "type": "포장"
      }
    ]
  },
  {
    "orderID": "20221128000017",
    "storeID": 1,
    "guestID": 1,
    "storeName": "밸런스포인트",
    "about": "오늘의 핸드드립 커피 1개",
    "ETA": 10,
    "cancelReason": null,
    "state": 3,
    "day": 1669614268328,
    "items": [
      {
        "mID": 1,
        "name": "오늘의 핸드드립 커피",
        "won": 3500,
        "num": 1,
        "type": "포장"
      }
    ]
  },
  {
    "orderID": "20221125000002",
    "storeID": 1,
    "guestID": 2,
    "storeName": "밸런스포인트",
    "about": "에스프레소 1개",
    "ETA": 10,
    "cancelReason": null,
    "state": 3,
    "day": 1669334098604,
    "items": [
      {
        "mID": 5,
        "name": "에스프레소",
        "won": 3500,
        "num": 1,
        "type": "포장"
      }
    ]
  },
  {
    "orderID": "20221125000001",
    "storeID": 1,
    "guestID": 1,
    "storeName": "밸런스포인트",
    "about": "에스프레소 1개",
    "ETA": 10,
    "cancelReason": null,
    "state": 3,
    "day": 1669334066620,
    "items": [
      {
        "mID": 5,
        "name": "에스프레소",
        "won": 3500,
        "num": 1,
        "type": "포장"
      }
    ]
  },
  {
    "orderID": "20221124000002",
    "storeID": 1,
    "guestID": 2,
    "storeName": "밸런스포인트",
    "about": "에스프레소 1개",
    "ETA": 10,
    "cancelReason": null,
    "state": 3,
    "day": 1669259624862,
    "items": [
      {
        "mID": 5,
        "name": "에스프레소",
        "won": 3500,
        "num": 1,
        "type": "포장"
      }
    ]
  },
  {
    "orderID": "20221124000001",
    "storeID": 1,
    "guestID": 1,
    "storeName": "밸런스포인트",
    "about": "에스프레소 1개",
    "ETA": 10,
    "cancelReason": null,
    "state": 3,
    "day": 1669259317304,
    "items": [
      {
        "mID": 5,
        "name": "에스프레소",
        "won": 3500,
        "num": 1,
        "type": "포장"
      }
    ]
  },
  {
    "orderID": "20221122000008",
    "storeID": 1,
    "guestID": 7,
    "storeName": "밸런스포인트",
    "about": "에스프레소 1개",
    "ETA": 10,
    "cancelReason": null,
    "state": 3,
    "day": 1669106069188,
    "items": [
      {
        "mID": 5,
        "name": "에스프레소",
        "won": 3500,
        "num": 1,
        "type": "매장"
      }
    ]
  },
  {
    "orderID": "20221122000006",
    "storeID": 1,
    "guestID": 6,
    "storeName": "밸런스포인트",
    "about": "에스프레소 1개",
    "ETA": 10,
    "cancelReason": null,
    "state": 3,
    "day": 1669105865930,
    "items": [
      {
        "mID": 5,
        "name": "에스프레소",
        "won": 3500,
        "num": 1,
        "type": "매장"
      }
    ]
  },
  {
    "orderID": "20221122000005",
    "storeID": 1,
    "guestID": 5,
    "storeName": "밸런스포인트",
    "about": "오늘의 핸드드립 커피 1개",
    "ETA": 10,
    "cancelReason": "sample",
    "state": 4,
    "day": 1669105521923,
    "items": [
      {
        "mID": 1,
        "name": "오늘의 핸드드립 커피",
        "won": 3500,
        "num": 1,
        "type": "포장"
      }
    ]
  },
  {
    "orderID": "20221122000004",
    "storeID": 1,
    "guestID": 4,
    "storeName": "밸런스포인트",
    "about": "에스프레소 1개",
    "ETA": 10,
    "cancelReason": null,
    "state": 3,
    "day": 1669105347889,
    "items": [
      {
        "mID": 5,
        "name": "에스프레소",
        "won": 3500,
        "num": 1,
        "type": "포장"
      }
    ]
  },
  {
    "orderID": "20221122000003",
    "storeID": 1,
    "guestID": 3,
    "storeName": "밸런스포인트",
    "about": "에스프레소 1개",
    "ETA": 10,
    "cancelReason": "sample",
    "state": 4,
    "day": 1669105307841,
    "items": [
      {
        "mID": 5,
        "name": "에스프레소",
        "won": 3500,
        "num": 1,
        "type": "포장"
      }
    ]
  },
  {
    "orderID": "20221122000002",
    "storeID": 1,
    "guestID": 2,
    "storeName": "밸런스포인트",
    "about": "바닐라라떼 1개",
    "ETA": 10,
    "cancelReason": null,
    "state": 3,
    "day": 1669105252144,
    "items": [
      {
        "mID": 10,
        "name": "바닐라라떼",
        "won": 4500,
        "num": 1,
        "type": "포장"
      }
    ]
  },
  {
    "orderID": "20221122000001",
    "storeID": 1,
    "guestID": 1,
    "storeName": "밸런스포인트",
    "about": "플랫화이트 1개",
    "ETA": 10,
    "cancelReason": "카페의 [재료소진]의 이유로 접수 및 결제 취소",
    "state": 6,
    "day": 1669105193642,
    "items": [
      {
        "mID": 8,
        "name": "플랫화이트",
        "won": 4500,
        "num": 1,
        "type": "포장"
      }
    ]
  },
  {
    "orderID": "20221121000037",
    "storeID": 1,
    "guestID": 7,
    "storeName": "밸런스포인트",
    "about": "에스프레소 1개",
    "ETA": 10,
    "cancelReason": null,
    "state": 3,
    "day": 1669038687427,
    "items": [
      {
        "mID": 5,
        "name": "에스프레소",
        "won": 3500,
        "num": 1,
        "type": "포장"
      }
    ]
  },
  {
    "orderID": "20221121000035",
    "storeID": 1,
    "guestID": 6,
    "storeName": "밸런스포인트",
    "about": "에스프레소 1개",
    "ETA": 10,
    "cancelReason": null,
    "state": 3,
    "day": 1669019322385,
    "items": [
      {
        "mID": 5,
        "name": "에스프레소",
        "won": 3500,
        "num": 1,
        "type": "포장"
      }
    ]
  },
  {
    "orderID": "20221121000034",
    "storeID": 1,
    "guestID": 5,
    "storeName": "밸런스포인트",
    "about": "에스프레소 1개",
    "ETA": 10,
    "cancelReason": null,
    "state": 3,
    "day": 1669019273025,
    "items": [
      {
        "mID": 5,
        "name": "에스프레소",
        "won": 3500,
        "num": 1,
        "type": "포장"
      }
    ]
  },
  {
    "orderID": "20221121000033",
    "storeID": 1,
    "guestID": 4,
    "storeName": "밸런스포인트",
    "about": "에스프레소 1개",
    "ETA": 10,
    "cancelReason": null,
    "state": 3,
    "day": 1669019136380,
    "items": [
      {
        "mID": 5,
        "name": "에스프레소",
        "won": 3500,
        "num": 1,
        "type": "포장"
      }
    ]
  },
  {
    "orderID": "20221121000032",
    "storeID": 1,
    "guestID": 3,
    "storeName": "밸런스포인트",
    "about": "에스프레소 1개",
    "ETA": 10,
    "cancelReason": null,
    "state": 3,
    "day": 1669019103612,
    "items": [
      {
        "mID": 5,
        "name": "에스프레소",
        "won": 3500,
        "num": 1,
        "type": "포장"
      }
    ]
  },
  {
    "orderID": "20221121000031",
    "storeID": 1,
    "guestID": 2,
    "storeName": "밸런스포인트",
    "about": "핸드드립 1개",
    "ETA": 10,
    "cancelReason": null,
    "state": 3,
    "day": 1669019027329,
    "items": [
      {
        "mID": 4,
        "name": "핸드드립",
        "won": 5000,
        "num": 1,
        "type": "포장"
      }
    ]
  },
  {
    "orderID": "20221121000030",
    "storeID": 1,
    "guestID": 1,
    "storeName": "밸런스포인트",
    "about": "에스프레소 1개",
    "ETA": 10,
    "cancelReason": null,
    "state": 3,
    "day": 1669019003789,
    "items": [
      {
        "mID": 5,
        "name": "에스프레소",
        "won": 3500,
        "num": 1,
        "type": "포장"
      }
    ]
  },
  {
    "orderID": "20221202000051",
    "storeID": 1,
    "guestID": 16,
    "storeName": "밸런스포인트",
    "about": "카페라떼 1개",
    "ETA": 10,
    "cancelReason": null,
    "state": 3,
    "day": 1669969500350,
    "items": [
      {
        "mID": 9,
        "name": "카페라떼",
        "won": 4000,
        "num": 1,
        "type": "포장"
      }
    ]
  },
  {
    "orderID": "20221202000050",
    "storeID": 1,
    "guestID": 15,
    "storeName": "밸런스포인트",
    "about": "오늘의 핸드드립 커피 1개",
    "ETA": 10,
    "cancelReason": null,
    "state": 3,
    "day": 1669969445114,
    "items": [
      {
        "mID": 1,
        "name": "오늘의 핸드드립 커피",
        "won": 3500,
        "num": 1,
        "type": "포장"
      }
    ]
  },
  {
    "orderID": "20221202000049",
    "storeID": 1,
    "guestID": 14,
    "storeName": "밸런스포인트",
    "about": "에스프레소 1개",
    "ETA": 10,
    "cancelReason": null,
    "state": 3,
    "day": 1669969421301,
    "items": [
      {
        "mID": 5,
        "name": "에스프레소",
        "won": 3500,
        "num": 1,
        "type": "포장"
      }
    ]
  },
  {
    "orderID": "20221202000048",
    "storeID": 1,
    "guestID": 13,
    "storeName": "밸런스포인트",
    "about": "에스프레소 1개",
    "ETA": 10,
    "cancelReason": null,
    "state": 3,
    "day": 1669969402258,
    "items": [
      {
        "mID": 5,
        "name": "에스프레소",
        "won": 3500,
        "num": 1,
        "type": "포장"
      }
    ]
  },
  {
    "orderID": "20221202000047",
    "storeID": 1,
    "guestID": 12,
    "storeName": "밸런스포인트",
    "about": "에스프레소 1개",
    "ETA": 10,
    "cancelReason": null,
    "state": 3,
    "day": 1669968148287,
    "items": [
      {
        "mID": 5,
        "name": "에스프레소",
        "won": 3500,
        "num": 1,
        "type": "포장"
      }
    ]
  },
  {
    "orderID": "20221202000046",
    "storeID": 1,
    "guestID": 11,
    "storeName": "밸런스포인트",
    "about": "에스프레소 1개",
    "ETA": 10,
    "cancelReason": null,
    "state": 3,
    "day": 1669968147036,
    "items": [
      {
        "mID": 5,
        "name": "에스프레소",
        "won": 3500,
        "num": 1,
        "type": "포장"
      }
    ]
  },
  {
    "orderID": "20221202000045",
    "storeID": 1,
    "guestID": 10,
    "storeName": "밸런스포인트",
    "about": "한정판매/드립백 박스 (10ea) 1개",
    "ETA": 20,
    "cancelReason": null,
    "state": 3,
    "day": 1669968066255,
    "items": [
      {
        "mID": 3,
        "name": "한정판매/드립백 박스 (10ea)",
        "won": 12000,
        "num": 1,
        "type": "매장"
      }
    ]
  },
  {
    "orderID": "20221202000043",
    "storeID": 1,
    "guestID": 9,
    "storeName": "밸런스포인트",
    "about": "연유라떼 1개",
    "ETA": 10,
    "cancelReason": null,
    "state": 3,
    "day": 1669966492362,
    "items": [
      {
        "mID": 11,
        "name": "연유라떼",
        "won": 4500,
        "num": 1,
        "type": "포장"
      }
    ]
  },
  {
    "orderID": "20221202000042",
    "storeID": 1,
    "guestID": 8,
    "storeName": "밸런스포인트",
    "about": "플랫화이트 1개",
    "ETA": 10,
    "cancelReason": null,
    "state": 3,
    "day": 1669966340618,
    "items": [
      {
        "mID": 8,
        "name": "플랫화이트",
        "won": 4500,
        "num": 1,
        "type": "포장"
      }
    ]
  },
  {
    "orderID": "20221202000034",
    "storeID": 1,
    "guestID": 7,
    "storeName": "밸런스포인트",
    "about": "아메리카노 1개",
    "ETA": 10,
    "cancelReason": "sample",
    "state": 4,
    "day": 1669965889624,
    "items": [
      {
        "mID": 6,
        "name": "아메리카노",
        "won": 3500,
        "num": 1,
        "type": "포장"
      }
    ]
  },
  {
    "orderID": "20221202000032",
    "storeID": 1,
    "guestID": 6,
    "storeName": "밸런스포인트",
    "about": "아메리카노 1개",
    "ETA": 10,
    "cancelReason": "sample",
    "state": 4,
    "day": 1669965748879,
    "items": [
      {
        "mID": 6,
        "name": "아메리카노",
        "won": 3500,
        "num": 1,
        "type": "포장"
      }
    ]
  },
  {
    "orderID": "20221202000030",
    "storeID": 1,
    "guestID": 4,
    "storeName": "밸런스포인트",
    "about": "핸드드립 1개",
    "ETA": 10,
    "cancelReason": "sample",
    "state": 4,
    "day": 1669965485918,
    "items": [
      {
        "mID": 4,
        "name": "핸드드립",
        "won": 5000,
        "num": 1,
        "type": "포장"
      }
    ]
  },
  {
    "orderID": "20221202000029",
    "storeID": 1,
    "guestID": 5,
    "storeName": "밸런스포인트",
    "about": "더치커피ICEd 1개",
    "ETA": 10,
    "cancelReason": null,
    "state": 3,
    "day": 1669965452432,
    "items": [
      {
        "mID": 7,
        "name": "더치커피ICEd",
        "won": 4000,
        "num": 1,
        "type": "매장"
      }
    ]
  },
  {
    "orderID": "20221202000028",
    "storeID": 1,
    "guestID": 3,
    "storeName": "밸런스포인트",
    "about": "플랫화이트 1개",
    "ETA": 10,
    "cancelReason": "카페의 [재료소진]의 이유로 접수 및 결제 취소",
    "state": 5,
    "day": 1669965375839,
    "items": [
      {
        "mID": 8,
        "name": "플랫화이트",
        "won": 4500,
        "num": 1,
        "type": "포장"
      }
    ]
  },
  {
    "orderID": "20221202000025",
    "storeID": 1,
    "guestID": 2,
    "storeName": "밸런스포인트",
    "about": "에스프레소 1개",
    "ETA": 10,
    "cancelReason": null,
    "state": 3,
    "day": 1669965143905,
    "items": [
      {
        "mID": 5,
        "name": "에스프레소",
        "won": 3500,
        "num": 1,
        "type": "포장"
      }
    ]
  },
  {
    "orderID": "20221202000024",
    "storeID": 1,
    "guestID": 1,
    "storeName": "밸런스포인트",
    "about": "아메리카노 1개",
    "ETA": 10,
    "cancelReason": null,
    "state": 3,
    "day": 1669965103351,
    "items": [
      {
        "mID": 6,
        "name": "아메리카노",
        "won": 3500,
        "num": 1,
        "type": "매장"
      }
    ]
  }
]

module.exports = orderList;