var zipcode = "10016"
var apt_names = ["109 E 37th St Unit 5E","115 E 34th St Unit 1608","121 Madison Ave Unit 2I","121 Madison Ave Unit 7h","135 E 27th St Unit 1","140 E 33rd St Unit j","145 E 27th St Unit 12-N","150 E 31st St Unit 12E","150 E 39th St Unit 1502","160 Madison","168 E 33rd St Unit 7","208 E 37th St Unit 4K","220 E 36th St Unit 1e","240 Madison Ave Unit 4c","310 E 33rd St Unit 19f","312 E 30th St Unit 15dd","314 E 35th St Unit 25","320 E 39th St Unit 10L","326 E 35th St Unit A","336 E 30th St Unit 1R3BR","338 E 30th St Unit 1R","340 E 29th St Unit 2-I","630 1st Avenue Unit 27F","7 E 32nd St Unit 5G","78 E 32nd St Unit 5h","Biltmore Plaza","Kips Bay Court","Murray Hill East - Luxury Furnished Apartment","The Anthem","Windsor Court"]
var apt_addresses = ["109 E 37th St, New York, NY 10016","115 E 34th St, New York, NY 10016","121 Madison Ave, New York, NY 10016","121 Madison Ave, New York, NY 10016","135 E 27th St, New York, NY 10016","140 E 33rd St, New York, NY 10016","145 E 27th St, New York, NY 10016","150 E 31st St, New York, NY 10016","150 E 39th St, New York, NY 10016","160 Madison Ave, New York, NY 10016","168 E 33rd St, New York, NY 10016","208 E 37th St, New York, NY 10016","220 E 36th St, New York, NY 10016","240 Madison Ave, New York, NY 10016","310 E 33rd St, New York, NY 10016","312 E 30th St, New York, NY 10016","314 E 35th St, New York, NY 10016","320 E 39th St, New York, NY 10016","326 E 35th St, New York, NY 10016","336 E 30th St, New York, NY 10016","338 E 30th St, New York, NY 10016","340 E 29th St, New York, NY 10016","630 1st Avenue, New York, NY 10016","7 E 32nd St, New York, NY 10016","78 E 32nd St, New York, NY 10016","155 E 29th St, New York, NY 10016","490 2nd Ave, New York, NY 10016","149 E 39th St, New York, NY 10016","222 E 34th St, New York, NY 10016","155 E 31st St, New York, NY 10016"]
var apt_images = ["https://images1.apartments.com/i2/F1jKjNtg5Naz1CEnQhtcTdYg60nyjSpGYM4EniN6YsA/111/109-e-37th-st-unit-5e-new-york-ny-primary-photo.jpg","https://images1.apartments.com/i2/ySc_-TFGz9hyXt4iB_Ft5VVuTUrPQaZRCsuYlXpJ11g/111/115-e-34th-st-unit-1608-new-york-ny-primary-photo.jpg","https://images1.apartments.com/i2/TEGfO8DlQ2GXi7c9XmGZkCLH7VUc2YzL_x8r3PxcHjg/111/121-madison-ave-unit-2i-new-york-ny-primary-photo.jpg","https://images1.apartments.com/i2/Ao3NHj77uWH7VNWKGWvpzrflsMojpLsDZgTOFiOn9H0/111/121-madison-ave-unit-7h-new-york-ny-primary-photo.jpg","https://images1.apartments.com/i2/dY_7uK5zMCmekUbtckU-1lMwKGdnKZD80WqL9l4rFiQ/111/135-e-27th-st-unit-1-new-york-ny-primary-photo.jpg","https://images1.apartments.com/i2/nZz-x5r0FDcgad5uFMem5TfvtQa1gwW2iLVhvgyRavI/111/140-e-33rd-st-unit-j-new-york-ny-primary-photo.jpg","https://images1.apartments.com/i2/LAHST7Lo1AMi4tvcFL3_HO4RUdnEr_QjR__YPnsk5D0/111/145-e-27th-st-unit-12-n-new-york-ny-primary-photo.jpg","https://images1.apartments.com/i2/hrGhP_UFCWvQHmV-HJNyD43jjZC_0CqfpE2y_Iy4SfE/111/150-e-31st-st-unit-12e-new-york-ny-primary-photo.jpg","https://images1.apartments.com/i2/qgcuI2r9x0jjLCExosfmCEbOaAW-slKKI0n3zMREc6Q/111/150-e-39th-st-unit-1502-new-york-ny-primary-photo.jpg","","https://images1.apartments.com/i2/ygdrj2m2etgauLE9Eao1H45cANLIa2YWnkRI_GY8Ioc/111/168-e-33rd-st-unit-7-new-york-ny-primary-photo.jpg","https://images1.apartments.com/i2/ZLcYLg4Goyu4CcxqteDFdUB6LLmP-tkdUvs1mc_jGvY/111/208-e-37th-st-unit-4k-new-york-ny-primary-photo.jpg","https://images1.apartments.com/i2/HxaXM2alYQUAU8Tn81POqvrqAgL2zRhvTnG7PhyGJxA/111/220-e-36th-st-unit-1e-new-york-ny-primary-photo.jpg","https://images1.apartments.com/i2/4nGovkV6CBjB7fYRQaMUtzT6O7R5J16TdSYRqOG8tcA/111/240-madison-ave-unit-4c-new-york-ny-primary-photo.jpg","https://images1.apartments.com/i2/5pcJeWfxohOEgi8DnR5WMoQIcr_OAv1Jfp7iMycpU8Q/111/310-e-33rd-st-unit-19f-new-york-ny-primary-photo.jpg","https://images1.apartments.com/i2/XJIW19uBZO79QwpqqvJaI7H_QPupKZcBvQyxy2d1Kf0/111/312-e-30th-st-unit-15dd-new-york-ny-primary-photo.jpg","https://images1.apartments.com/i2/bDKdF99fBFAWw22hc7vM9mpvEXtZ6Pid41WZb_nKgjA/111/314-e-35th-st-unit-25-new-york-ny-primary-photo.jpg","https://images1.apartments.com/i2/yISp8B2iUZcQFW2peQ2O9xiW_L3i7VHQArYnS7y4dII/111/320-e-39th-st-unit-10l-new-york-ny-primary-photo.jpg","https://images1.apartments.com/i2/a1ZDw6gMUOIlwyBwWtRJM5Gpe3VGn32EDRLfkLrkbtc/111/326-e-35th-st-unit-a-new-york-ny-primary-photo.jpg","https://images1.apartments.com/i2/DuzEWKgYHJ5zGx_CzThSv_B7Ue2PTZmTzpykGAt6ZIc/111/336-e-30th-st-unit-1r3br-new-york-ny-primary-photo.jpg","https://images1.apartments.com/i2/sOvirIrxt2JyB25bn1ysu9SN0PlmXSEOxXcYWOPno2A/111/338-e-30th-st-unit-1r-new-york-ny-primary-photo.jpg","https://images1.apartments.com/i2/jtGwLbSZYTF9ed8azsRBSOa8AUJbivPsG-EhaRSV9f8/111/340-e-29th-st-unit-2-i-new-york-ny-primary-photo.jpg","https://images1.apartments.com/i2/Lkwo9VMYGFZynhhEkx91U0x3zT9ets_F6gKDwcE_65s/111/630-1st-avenue-unit-27f-new-york-ny-primary-photo.jpg","https://images1.apartments.com/i2/IAP0F8R8JUuglzOJIDOVVF8baM4JP6SQXTrp6B0MLtE/111/7-e-32nd-st-unit-5g-new-york-ny-primary-photo.jpg","https://images1.apartments.com/i2/F6Fb_B_qQ003VBWBXdiSqf9BlraejiU2aoY2X6O5IV0/111/78-e-32nd-st-unit-5h-new-york-ny-primary-photo.jpg","","","","",""]