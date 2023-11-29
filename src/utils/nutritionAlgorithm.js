export function getNutritionStatus(props) {
  const {
    weight,
    height,
    babyAge,
    babyGender,
  } = props;

  const bbuTbuLkStandartReference = {
    female: [
      {
        ageInMonth: 0,
        bbu: {
          min3: 2.0,
          min2: 2.4,
          min: 2.8,
          median: 3.2,
          plus: 3.7,
          plus2: 4.2,
          plus3: 4.8,
        },
        tbu: {
          min3: 43.6,
          min2: 45.4,
          min: 47.3,
          median: 49.1,
          plus: 51,
          plus2: 52.9,
          plus3: 54.7,
        },
        headCircumference: {
          median: 34,
        },
      },
      {
        ageInMonth: 1,
        bbu: {
          min3: 2.7,
          min2: 3.2,
          min: 3.6,
          median: 4.2,
          plus: 4.8,
          plus2: 5.5,
          plus3: 6.2,
        },
        tbu: {
          min3: 47.8,
          min2: 49.8,
          min: 51.7,
          median: 53.7,
          plus: 55.6,
          plus2: 57.6,
          plus3: 59.5,
        },
        headCircumference: {
          median: 36,
        },
      },
      {
        ageInMonth: 2,
        bbu: {
          min3: 3.4,
          min2: 3.9,
          min: 4.5,
          median: 5.1,
          plus: 5.8,
          plus2: 6.6,
          plus3: 7.5,
        },
        tbu: {
          min3: 51.0,
          min2: 53.0,
          min: 55,
          median: 57.1,
          plus: 59.1,
          plus2: 61.1,
          plus3: 63.2,
        },
        headCircumference: {
          median: 38,
        },
      },
      {
        ageInMonth: 3,
        bbu: {
          min3: 4.0,
          min2: 4.5,
          min: 5.2,
          median: 5.8,
          plus: 6.6,
          plus2: 7.5,
          plus3: 8.5,
        },
        tbu: {
          min3: 53.5,
          min2: 55.6,
          min: 57.7,
          median: 59.8,
          plus: 61.9,
          plus2: 64.0,
          plus3: 66.1,
        },
        headCircumference: {
          median: 40,
        },
      },
      {
        ageInMonth: 4,
        bbu: {
          min3: 4.4,
          min2: 5.0,
          min: 5.7,
          median: 6.4,
          plus: 7.3,
          plus2: 8.2,
          plus3: 9.3,
        },
        tbu: {
          min3: 55.6,
          min2: 57.8,
          min: 59.9,
          median: 62.1,
          plus: 64.3,
          plus2: 66.4,
          plus3: 68.6,
        },
        headCircumference: {
          median: 41,
        },
      },
      {
        ageInMonth: 5,
        bbu: {
          min3: 4.8,
          min2: 5.4,
          min: 6.1,
          median: 6.9,
          plus: 7.8,
          plus2: 8.8,
          plus3: 10.0,
        },
        tbu: {
          min3: 57.4,
          min2: 59.6,
          min: 61.8,
          median: 64,
          plus: 66.2,
          plus2: 68.5,
          plus3: 70.7,
        },
        headCircumference: {
          median: 42,
        },
      },
      {
        ageInMonth: 6,
        bbu: {
          min3: 5.1,
          min2: 5.7,
          min: 6.5,
          median: 7.3,
          plus: 8.2,
          plus2: 9.3,
          plus3: 10.6,
        },
        tbu: {
          min3: 58.9,
          min2: 61.2,
          min: 63.5,
          median: 65.7,
          plus: 68.0,
          plus2: 70.3,
          plus3: 72.5,
        },
        headCircumference: {
          median: 43,
        },
      },
      {
        ageInMonth: 7,
        bbu: {
          min3: 5.3,
          min2: 6.0,
          min: 6.8,
          median: 7.6,
          plus: 8.6,
          plus2: 9.8,
          plus3: 11.1,
        },
        tbu: {
          min3: 60.3,
          min2: 62.7,
          min: 65.0,
          median: 67.3,
          plus: 69.6,
          plus2: 71.9,
          plus3: 74.2,
        },
        headCircumference: {
          median: 44,
        },
      },
      {
        ageInMonth: 8,
        bbu: {
          min3: 5.6,
          min2: 6.3,
          min: 7.0,
          median: 7.9,
          plus: 9.0,
          plus2: 10.2,
          plus3: 11.6,
        },
        tbu: {
          min3: 61.7,
          min2: 64.0,
          min: 66.4,
          median: 68.7,
          plus: 71.1,
          plus2: 73.5,
          plus3: 75.8,
        },
        headCircumference: {
          median: 45,
        },
      },
      {
        ageInMonth: 9,
        bbu: {
          min3: 5.8,
          min2: 6.5,
          min: 7.3,
          median: 8.2,
          plus: 9.3,
          plus2: 10.5,
          plus3: 12.0,
        },
        tbu: {
          min3: 62.9,
          min2: 65.3,
          min: 67.7,
          median: 70.1,
          plus: 72.6,
          plus2: 75.0,
          plus3: 77.4,
        },
        headCircumference: {
          median: 45,
        },
      },
      {
        ageInMonth: 10,
        bbu: {
          min3: 5.9,
          min2: 6.7,
          min: 7.5,
          median: 8.5,
          plus: 9.6,
          plus2: 10.9,
          plus3: 12.4,
        },
        tbu: {
          min3: 64.1,
          min2: 66.5,
          min: 69.0,
          median: 71.5,
          plus: 73.9,
          plus2: 76.4,
          plus3: 78.9,
        },
        headCircumference: {
          median: 46,
        },
      },
      {
        ageInMonth: 11,
        bbu: {
          min3: 6.1,
          min2: 6.9,
          min: 7.7,
          median: 8.7,
          plus: 9.9,
          plus2: 11.2,
          plus3: 12.8,
        },
        tbu: {
          min3: 65.2,
          min2: 67.7,
          min: 70.3,
          median: 72.8,
          plus: 75.3,
          plus2: 77.8,
          plus3: 80.3,
        },
        headCircumference: {
          median: 46,
        },
      },
      {
        ageInMonth: 12,
        bbu: {
          min3: 6.3,
          min2: 7.0,
          min: 7.9,
          median: 8.9,
          plus: 10.1,
          plus2: 11.5,
          plus3: 13.1,
        },
        tbu: {
          min3: 66.3,
          min2: 68.9,
          min: 71.4,
          median: 74.0,
          plus: 76.6,
          plus2: 79.2,
          plus3: 81.7,
        },
        headCircumference: {
          median: 47,
        },
      },
      {
        ageInMonth: 13,
        bbu: {
          min3: 6.4,
          min2: 7.2,
          min: 8.1,
          median: 9.2,
          plus: 10.4,
          plus2: 11.8,
          plus3: 13.5,
        },
        tbu: {
          min3: 67.3,
          min2: 70.0,
          min: 72.6,
          median: 75.2,
          plus: 77.8,
          plus2: 80.5,
          plus3: 83.1,
        },
        headCircumference: {
          median: 47,
        },
      },
      {
        ageInMonth: 14,
        bbu: {
          min3: 6.6,
          min2: 7.4,
          min: 8.3,
          median: 9.4,
          plus: 10.6,
          plus2: 12.1,
          plus3: 13.8,
        },
        tbu: {
          min3: 68.3,
          min2: 71.0,
          min: 73.7,
          median: 76.4,
          plus: 79.1,
          plus2: 81.7,
          plus3: 84.4,
        },
        headCircumference: {
          median: 48,
        },
      },
      {
        ageInMonth: 15,
        bbu: {
          min3: 6.7,
          min2: 7.6,
          min: 8.5,
          median: 9.6,
          plus: 10.9,
          plus2: 12.4,
          plus3: 14.1,
        },
        tbu: {
          min3: 69.3,
          min2: 72.0,
          min: 74.8,
          median: 77.5,
          plus: 80.2,
          plus2: 83.0,
          plus3: 85.7,
        },
        headCircumference: {
          median: 48,
        },
      },
      {
        ageInMonth: 16,
        bbu: {
          min3: 6.9,
          min2: 7.7,
          min: 8.7,
          median: 9.8,
          plus: 11.1,
          plus2: 12.6,
          plus3: 14.5,
        },
        tbu: {
          min3: 70.2,
          min2: 73.0,
          min: 75.8,
          median: 78.6,
          plus: 81.4,
          plus2: 84.2,
          plus3: 87.0,
        },
        headCircumference: {
          median: 48,
        },
      },
      {
        ageInMonth: 17,
        bbu: {
          min3: 7.0,
          min2: 7.9,
          min: 8.9,
          median: 10.0,
          plus: 11.4,
          plus2: 12.9,
          plus3: 14.8,
        },
        tbu: {
          min3: 71.1,
          min2: 74.0,
          min: 76.8,
          median: 79.7,
          plus: 82.5,
          plus2: 85.4,
          plus3: 88.2,
        },
        headCircumference: {
          median: 49,
        },
      },
      {
        ageInMonth: 18,
        bbu: {
          min3: 7.2,
          min2: 8.1,
          min: 9.1,
          median: 10.2,
          plus: 11.6,
          plus2: 13.2,
          plus3: 15.1,
        },
        tbu: {
          min3: 72.0,
          min2: 74.9,
          min: 77.8,
          median: 80.7,
          plus: 83.6,
          plus2: 86.5,
          plus3: 89.4,
        },
        headCircumference: {
          median: 49,
        },
      },
      {
        ageInMonth: 19,
        bbu: {
          min3: 7.3,
          min2: 8.2,
          min: 9.2,
          median: 10.4,
          plus: 11.8,
          plus2: 13.5,
          plus3: 15.4,
        },
        tbu: {
          min3: 72.8,
          min2: 75.8,
          min: 78.8,
          median: 81.7,
          plus: 84.7,
          plus2: 87.6,
          plus3: 90.6,
        },
        headCircumference: {
          median: 49,
        },
      },
      {
        ageInMonth: 20,
        bbu: {
          min3: 7.5,
          min2: 8.4,
          min: 9.4,
          median: 10.6,
          plus: 12.1,
          plus2: 13.7,
          plus3: 15.7,
        },
        tbu: {
          min3: 73.7,
          min2: 76.7,
          min: 79.7,
          median: 82.7,
          plus: 85.7,
          plus2: 88.7,
          plus3: 91.7,
        },
        headCircumference: {
          median: 50,
        },
      },
      {
        ageInMonth: 21,
        bbu: {
          min3: 7.6,
          min2: 8.6,
          min: 9.6,
          median: 10.9,
          plus: 12.3,
          plus2: 14.0,
          plus3: 16.0,
        },
        tbu: {
          min3: 74.5,
          min2: 77.5,
          min: 80.6,
          median: 83.7,
          plus: 86.7,
          plus2: 89.8,
          plus3: 92.9,
        },
        headCircumference: {
          median: 50,
        },
      },
      {
        ageInMonth: 22,
        bbu: {
          min3: 7.8,
          min2: 8.7,
          min: 9.8,
          median: 11.1,
          plus: 12.5,
          plus2: 14.3,
          plus3: 16.4,
        },
        tbu: {
          min3: 75.2,
          min2: 78.4,
          min: 81.5,
          median: 84.6,
          plus: 87.7,
          plus2: 90.8,
          plus3: 94.0,
        },
        headCircumference: {
          median: 50,
        },
      },
      {
        ageInMonth: 23,
        bbu: {
          min3: 7.9,
          min2: 8.9,
          min: 10.0,
          median: 11.3,
          plus: 12.8,
          plus2: 14.6,
          plus3: 16.7,
        },
        tbu: {
          min3: 76.0,
          min2: 79.2,
          min: 82.3,
          median: 85.5,
          plus: 88.7,
          plus2: 91.9,
          plus3: 95.0,
        },
        headCircumference: {
          median: 51,
        },
      },
      {
        ageInMonth: 24,
        bbu: {
          min3: 8.1,
          min2: 9.0,
          min: 10.2,
          median: 11.5,
          plus: 13.0,
          plus2: 14.8,
          plus3: 17.0,
        },
        tbu: {
          min3: 76.7,
          min2: 80.0,
          min: 83.2,
          median: 86.4,
          plus: 89.6,
          plus2: 92.9,
          plus3: 96.1,
        },
        headCircumference: {
          median: 51,
        },
      },
      {
        ageInMonth: 25,
        bbu: {
          min3: 8.2,
          min2: 9.2,
          min: 10.3,
          median: 11.7,
          plus: 13.3,
          plus2: 15.1,
          plus3: 17.3,
        },
        tbu: {
          min3: 76.8,
          min2: 80.0,
          min: 83.3,
          median: 86.6,
          plus: 89.9,
          plus2: 93.1,
          plus3: 96.4,
        },
        headCircumference: {
          median: 51,
        },
      },
      {
        ageInMonth: 26,
        bbu: {
          min3: 8.4,
          min2: 9.4,
          min: 10.5,
          median: 11.9,
          plus: 13.5,
          plus2: 15.4,
          plus3: 17.7,
        },
        tbu: {
          min3: 77.5,
          min2: 80.8,
          min: 84.1,
          median: 87.4,
          plus: 90.8,
          plus2: 94.1,
          plus3: 97.4,
        },
        headCircumference: {
          median: 52,
        },
      },
      {
        ageInMonth: 27,
        bbu: {
          min3: 8.5,
          min2: 9.5,
          min: 10.7,
          median: 12.1,
          plus: 13.7,
          plus2: 15.7,
          plus3: 18.0,
        },
        tbu: {
          min3: 78.1,
          min2: 81.5,
          min: 84.9,
          median: 88.3,
          plus: 91.7,
          plus2: 95.0,
          plus3: 98.4,
        },
        headCircumference: {
          median: 52,
        },
      },
      {
        ageInMonth: 28,
        bbu: {
          min3: 8.6,
          min2: 9.7,
          min: 10.9,
          median: 12.3,
          plus: 14.0,
          plus2: 16.0,
          plus3: 18.3,
        },
        tbu: {
          min3: 78.8,
          min2: 82.2,
          min: 85.7,
          median: 89.1,
          plus: 92.5,
          plus2: 96.0,
          plus3: 99.4,
        },
        headCircumference: {
          median: 52,
        },
      },
      {
        ageInMonth: 29,
        bbu: {
          min3: 8.8,
          min2: 9.8,
          min: 11.1,
          median: 12.5,
          plus: 14.2,
          plus2: 16.2,
          plus3: 18.7,
        },
        tbu: {
          min3: 79.5,
          min2: 82.9,
          min: 86.4,
          median: 89.9,
          plus: 93.4,
          plus2: 96.9,
          plus3: 100.3,
        },
        headCircumference: {
          median: 53,
        },
      },
      {
        ageInMonth: 30,
        bbu: {
          min3: 8.9,
          min2: 10.0,
          min: 11.2,
          median: 12.7,
          plus: 14.4,
          plus2: 16.5,
          plus3: 19.0,
        },
        tbu: {
          min3: 80.1,
          min2: 83.6,
          min: 87.1,
          median: 90.7,
          plus: 94.2,
          plus2: 97.7,
          plus3: 101.3,
        },
        headCircumference: {
          median: 53,
        },
      },
      {
        ageInMonth: 31,
        bbu: {
          min3: 9.0,
          min2: 10.1,
          min: 11.4,
          median: 12.7,
          plus: 14.7,
          plus2: 16.8,
          plus3: 19.3,
        },
        tbu: {
          min3: 80.7,
          min2: 84.3,
          min: 87.9,
          median: 91.4,
          plus: 95.0,
          plus2: 98.6,
          plus3: 102.2,
        },
        headCircumference: {
          median: 53,
        },
      },
      {
        ageInMonth: 32,
        bbu: {
          min3: 9.1,
          min2: 10.3,
          min: 11.6,
          median: 13.1,
          plus: 14.9,
          plus2: 17.1,
          plus3: 19.6,
        },
        tbu: {
          min3: 81.3,
          min2: 84.9,
          min: 88.6,
          median: 92.2,
          plus: 95.8,
          plus2: 99.4,
          plus3: 103.1,
        },
        headCircumference: {
          median: 54,
        },
      },
      {
        ageInMonth: 33,
        bbu: {
          min3: 9.3,
          min2: 10.4,
          min: 11.7,
          median: 13.3,
          plus: 15.1,
          plus2: 17.3,
          plus3: 20.0,
        },
        tbu: {
          min3: 81.9,
          min2: 85.6,
          min: 89.3,
          median: 92.9,
          plus: 96.6,
          plus2: 100.3,
          plus3: 103.9,
        },
        headCircumference: {
          median: 54,
        },
      },
      {
        ageInMonth: 34,
        bbu: {
          min3: 9.4,
          min2: 10.5,
          min: 11.9,
          median: 13.5,
          plus: 15.4,
          plus2: 17.6,
          plus3: 20.3,
        },
        tbu: {
          min3: 82.5,
          min2: 86.2,
          min: 89.9,
          median: 93.6,
          plus: 97.4,
          plus2: 101.1,
          plus3: 104.8,
        },
        headCircumference: {
          median: 54,
        },
      },
      {
        ageInMonth: 35,
        bbu: {
          min3: 9.5,
          min2: 10.7,
          min: 12.0,
          median: 13.7,
          plus: 15.6,
          plus2: 17.9,
          plus3: 20.6,
        },
        tbu: {
          min3: 83.1,
          min2: 86.8,
          min: 90.6,
          median: 94.4,
          plus: 98.1,
          plus2: 101.9,
          plus3: 105.6,
        },
        headCircumference: {
          median: 55,
        },
      },
      {
        ageInMonth: 36,
        bbu: {
          min3: 9.6,
          min2: 10.8,
          min: 12.2,
          median: 13.9,
          plus: 15.8,
          plus2: 18.1,
          plus3: 20.9,
        },
        tbu: {
          min3: 83.6,
          min2: 87.4,
          min: 91.2,
          median: 95.1,
          plus: 98.9,
          plus2: 102.7,
          plus3: 106.5,
        },
        headCircumference: {
          median: 55,
        },
      },
    ],
    male: [
      {
        ageInMonth: 0,
        bbu: {
          min3: 2.1,
          min2: 2.5,
          min: 2.9,
          median: 3.3,
          plus: 3.9,
          plus2: 4.4,
          plus3: 5.0,
        },
        tbu: {
          min3: 44.2,
          min2: 46.1,
          min: 48.0,
          median: 49.9,
          plus: 51.8,
          plus2: 53.7,
          plus3: 55.6,
        },
        headCircumference: {
          median: 35,
        },
      },
      {
        ageInMonth: 1,
        bbu: {
          min3: 2.9,
          min2: 3.4,
          min: 3.9,
          median: 4.5,
          plus: 5.1,
          plus2: 5.8,
          plus3: 6.6,
        },
        tbu: {
          min3: 48.9,
          min2: 50.8,
          min: 52.8,
          median: 54.7,
          plus: 56.7,
          plus2: 58.6,
          plus3: 60.6,
        },
        headCircumference: {
          median: 37,
        },
      },
      {
        ageInMonth: 2,
        bbu: {
          min3: 3.8,
          min2: 4.3,
          min: 4.9,
          median: 5.6,
          plus: 6.3,
          plus2: 7.1,
          plus3: 8.0,
        },
        tbu: {
          min3: 52.4,
          min2: 54.4,
          min: 56.4,
          median: 58.4,
          plus: 60.4,
          plus2: 62.4,
          plus3: 64.6,
        },
        headCircumference: {
          median: 39,
        },
      },
      {
        ageInMonth: 3,
        bbu: {
          min3: 4.4,
          min2: 5.0,
          min: 5.7,
          median: 6.4,
          plus: 7.2,
          plus2: 8.0,
          plus3: 9.0,
        },
        tbu: {
          min3: 55.3,
          min2: 57.3,
          min: 59.4,
          median: 61.4,
          plus: 63.5,
          plus2: 65.5,
          plus3: 67.6,
        },
        headCircumference: {
          median: 41,
        },
      },
      {
        ageInMonth: 4,
        bbu: {
          min3: 4.9,
          min2: 5.6,
          min: 6.2,
          median: 7.0,
          plus: 7.8,
          plus2: 8.7,
          plus3: 9.7,
        },
        tbu: {
          min3: 57.6,
          min2: 59.7,
          min: 61.8,
          median: 63.9,
          plus: 66.0,
          plus2: 68.0,
          plus3: 70.1,
        },
        headCircumference: {
          median: 42,
        },
      },
      {
        ageInMonth: 5,
        bbu: {
          min3: 5.3,
          min2: 6.0,
          min: 6.7,
          median: 7.5,
          plus: 8.4,
          plus2: 9.3,
          plus3: 10.4,
        },
        tbu: {
          min3: 59.6,
          min2: 61.7,
          min: 63.8,
          median: 65.9,
          plus: 68.0,
          plus2: 70.1,
          plus3: 72.2,
        },
        headCircumference: {
          median: 43,
        },
      },
      {
        ageInMonth: 6,
        bbu: {
          min3: 5.7,
          min2: 6.4,
          min: 7.1,
          median: 7.9,
          plus: 8.8,
          plus2: 9.8,
          plus3: 10.9,
        },
        tbu: {
          min3: 61.2,
          min2: 63.3,
          min: 65.5,
          median: 67.6,
          plus: 69.8,
          plus2: 71.9,
          plus3: 74.0,
        },
        headCircumference: {
          median: 44,
        },
      },
      {
        ageInMonth: 7,
        bbu: {
          min3: 5.9,
          min2: 6.7,
          min: 7.4,
          median: 8.3,
          plus: 9.2,
          plus2: 10.3,
          plus3: 11.4,
        },
        tbu: {
          min3: 62.7,
          min2: 64.8,
          min: 67.0,
          median: 69.2,
          plus: 71.3,
          plus2: 73.5,
          plus3: 75.7,
        },
        headCircumference: {
          median: 45,
        },
      },
      {
        ageInMonth: 8,
        bbu: {
          min3: 6.2,
          min2: 6.9,
          min: 7.7,
          median: 8.6,
          plus: 9.6,
          plus2: 10.7,
          plus3: 11.9,
        },
        tbu: {
          min3: 64.0,
          min2: 66.2,
          min: 68.4,
          median: 70.6,
          plus: 72.8,
          plus2: 75.0,
          plus3: 77.2,
        },
        headCircumference: {
          median: 46,
        },
      },
      {
        ageInMonth: 9,
        bbu: {
          min3: 6.4,
          min2: 7.1,
          min: 8.0,
          median: 8.9,
          plus: 9.9,
          plus2: 11.0,
          plus3: 12.3,
        },
        tbu: {
          min3: 65.2,
          min2: 67.5,
          min: 69.7,
          median: 72.0,
          plus: 74.2,
          plus2: 76.5,
          plus3: 78.7,
        },
        headCircumference: {
          median: 46,
        },
      },
      {
        ageInMonth: 10,
        bbu: {
          min3: 6.6,
          min2: 7.4,
          min: 8.2,
          median: 9.2,
          plus: 10.2,
          plus2: 11.4,
          plus3: 12.7,
        },
        tbu: {
          min3: 66.4,
          min2: 68.7,
          min: 71.0,
          median: 73.3,
          plus: 75.6,
          plus2: 77.9,
          plus3: 80.1,
        },
        headCircumference: {
          median: 47,
        },
      },
      {
        ageInMonth: 11,
        bbu: {
          min3: 6.8,
          min2: 7.6,
          min: 8.4,
          median: 9.4,
          plus: 10.5,
          plus2: 11.7,
          plus3: 13.0,
        },
        tbu: {
          min3: 67.6,
          min2: 69.9,
          min: 72.2,
          median: 74.5,
          plus: 76.9,
          plus2: 79.2,
          plus3: 81.5,
        },
        headCircumference: {
          median: 47,
        },
      },
      {
        ageInMonth: 12,
        bbu: {
          min3: 6.9,
          min2: 7.7,
          min: 8.6,
          median: 9.6,
          plus: 10.8,
          plus2: 12.0,
          plus3: 13.3,
        },
        tbu: {
          min3: 68.6,
          min2: 71.0,
          min: 73.4,
          median: 75.7,
          plus: 78.1,
          plus2: 80.5,
          plus3: 82.9,
        },
        headCircumference: {
          median: 48,
        },
      },
      {
        ageInMonth: 13,
        bbu: {
          min3: 7.1,
          min2: 7.9,
          min: 8.8,
          median: 9.9,
          plus: 11.0,
          plus2: 12.3,
          plus3: 13.7,
        },
        tbu: {
          min3: 69.6,
          min2: 72.1,
          min: 74.5,
          median: 76.9,
          plus: 79.3,
          plus2: 81.8,
          plus3: 84.2,
        },
        headCircumference: {
          median: 48,
        },
      },
      {
        ageInMonth: 14,
        bbu: {
          min3: 7.2,
          min2: 8.1,
          min: 9.0,
          median: 10.1,
          plus: 11.3,
          plus2: 12.6,
          plus3: 14.0,
        },
        tbu: {
          min3: 70.6,
          min2: 73.1,
          min: 75.6,
          median: 78.0,
          plus: 80.5,
          plus2: 83.0,
          plus3: 85.5,
        },
        headCircumference: {
          median: 49,
        },
      },
      {
        ageInMonth: 15,
        bbu: {
          min3: 7.4,
          min2: 8.3,
          min: 9.2,
          median: 10.3,
          plus: 11.5,
          plus2: 12.8,
          plus3: 14.3,
        },
        tbu: {
          min3: 71.6,
          min2: 74.1,
          min: 76.6,
          median: 79.1,
          plus: 81.7,
          plus2: 84.2,
          plus3: 86.7,
        },
        headCircumference: {
          median: 49,
        },
      },
      {
        ageInMonth: 16,
        bbu: {
          min3: 7.5,
          min2: 8.4,
          min: 9.4,
          median: 10.5,
          plus: 11.7,
          plus2: 13.1,
          plus3: 14.6,
        },
        tbu: {
          min3: 72.5,
          min2: 75.0,
          min: 77.6,
          median: 80.2,
          plus: 82.8,
          plus2: 85.4,
          plus3: 88.0,
        },
        headCircumference: {
          median: 49,
        },
      },
      {
        ageInMonth: 17,
        bbu: {
          min3: 7.7,
          min2: 8.6,
          min: 9.6,
          median: 10.7,
          plus: 12.0,
          plus2: 13.4,
          plus3: 14.9,
        },
        tbu: {
          min3: 73.3,
          min2: 76.0,
          min: 78.6,
          median: 81.2,
          plus: 83.9,
          plus2: 86.5,
          plus3: 89.2,
        },
        headCircumference: {
          median: 50,
        },
      },
      {
        ageInMonth: 18,
        bbu: {
          min3: 7.8,
          min2: 8.8,
          min: 9.8,
          median: 10.9,
          plus: 12.2,
          plus2: 13.7,
          plus3: 15.3,
        },
        tbu: {
          min3: 74.2,
          min2: 76.9,
          min: 79.6,
          median: 82.3,
          plus: 85.0,
          plus2: 87.7,
          plus3: 90.4,
        },
        headCircumference: {
          median: 50,
        },
      },
      {
        ageInMonth: 19,
        bbu: {
          min3: 8.0,
          min2: 8.9,
          min: 10.0,
          median: 11.1,
          plus: 12.5,
          plus2: 13.9,
          plus3: 15.6,
        },
        tbu: {
          min3: 75.0,
          min2: 77.7,
          min: 80.5,
          median: 83.2,
          plus: 86.0,
          plus2: 88.8,
          plus3: 91.5,
        },
        headCircumference: {
          median: 51,
        },
      },
      {
        ageInMonth: 20,
        bbu: {
          min3: 8.1,
          min2: 9.1,
          min: 10.1,
          median: 11.3,
          plus: 12.7,
          plus2: 14.2,
          plus3: 15.9,
        },
        tbu: {
          min3: 75.8,
          min2: 78.6,
          min: 81.4,
          median: 84.2,
          plus: 87.0,
          plus2: 89.8,
          plus3: 92.6,
        },
        headCircumference: {
          median: 51,
        },
      },
      {
        ageInMonth: 21,
        bbu: {
          min3: 8.2,
          min2: 9.1,
          min: 10.3,
          median: 11.5,
          plus: 12.9,
          plus2: 14.5,
          plus3: 16.2,
        },
        tbu: {
          min3: 76.5,
          min2: 79.4,
          min: 82.3,
          median: 85.1,
          plus: 88.0,
          plus2: 90.9,
          plus3: 93.8,
        },
        headCircumference: {
          median: 52,
        },
      },
      {
        ageInMonth: 22,
        bbu: {
          min3: 8.4,
          min2: 9.4,
          min: 10.5,
          median: 11.8,
          plus: 13.2,
          plus2: 14.7,
          plus3: 16.5,
        },
        tbu: {
          min3: 77.2,
          min2: 80.2,
          min: 83.1,
          median: 86.0,
          plus: 89.0,
          plus2: 91.9,
          plus3: 94.9,
        },
        headCircumference: {
          median: 52,
        },
      },
      {
        ageInMonth: 23,
        bbu: {
          min3: 8.5,
          min2: 9.5,
          min: 10.7,
          median: 12.0,
          plus: 13.4,
          plus2: 15.0,
          plus3: 16.8,
        },
        tbu: {
          min3: 78.0,
          min2: 81.0,
          min: 83.9,
          median: 86.9,
          plus: 89.9,
          plus2: 92.9,
          plus3: 95.9,
        },
        headCircumference: {
          median: 52,
        },
      },
      {
        ageInMonth: 24,
        bbu: {
          min3: 8.6,
          min2: 9.7,
          min: 10.8,
          median: 12.2,
          plus: 13.6,
          plus2: 15.3,
          plus3: 17.1,
        },
        tbu: {
          min3: 78.7,
          min2: 81.7,
          min: 84.9,
          median: 87.8,
          plus: 90.9,
          plus2: 93.9,
          plus3: 97.0,
        },
        headCircumference: {
          median: 53,
        },
      },
      {
        ageInMonth: 25,
        bbu: {
          min3: 8.8,
          min2: 9.8,
          min: 11.0,
          median: 12.4,
          plus: 13.9,
          plus2: 15.5,
          plus3: 17.5,
        },
        tbu: {
          min3: 78.6,
          min2: 81.7,
          min: 84.9,
          median: 88.0,
          plus: 91.1,
          plus2: 94.2,
          plus3: 97.3,
        },
        headCircumference: {
          median: 53,
        },
      },
      {
        ageInMonth: 26,
        bbu: {
          min3: 8.9,
          min2: 10.0,
          min: 11.2,
          median: 12.5,
          plus: 14.1,
          plus2: 15.8,
          plus3: 17.8,
        },
        tbu: {
          min3: 79.3,
          min2: 82.5,
          min: 85.6,
          median: 88.8,
          plus: 92.0,
          plus2: 95.2,
          plus3: 98.3,
        },
        headCircumference: {
          median: 54,
        },
      },
      {
        ageInMonth: 27,
        bbu: {
          min3: 9.0,
          min2: 910.1,
          min: 11.3,
          median: 12.7,
          plus: 14.3,
          plus2: 16.1,
          plus3: 18.1,
        },
        tbu: {
          min3: 79.9,
          min2: 83.1,
          min: 86.4,
          median: 89.6,
          plus: 92.9,
          plus2: 96.1,
          plus3: 99.3,
        },
        headCircumference: {
          median: 54,
        },
      },
      {
        ageInMonth: 28,
        bbu: {
          min3: 9.1,
          min2: 10.2,
          min: 11.5,
          median: 12.9,
          plus: 14.5,
          plus2: 16.3,
          plus3: 18.4,
        },
        tbu: {
          min3: 80.5,
          min2: 83.8,
          min: 87.1,
          median: 90.4,
          plus: 93.7,
          plus2: 97.0,
          plus3: 100.3,
        },
        headCircumference: {
          median: 55,
        },
      },
      {
        ageInMonth: 29,
        bbu: {
          min3: 9.2,
          min2: 10.4,
          min: 11.7,
          median: 13.1,
          plus: 14.8,
          plus2: 16.6,
          plus3: 18.7,
        },
        tbu: {
          min3: 81.1,
          min2: 84.5,
          min: 87.8,
          median: 91.2,
          plus: 94.5,
          plus2: 87.9,
          plus3: 101.2,
        },
        headCircumference: {
          median: 55,
        },
      },
      {
        ageInMonth: 30,
        bbu: {
          min3: 9.4,
          min2: 10.5,
          min: 11.8,
          median: 13.3,
          plus: 15.0,
          plus2: 16.9,
          plus3: 19.0,
        },
        tbu: {
          min3: 81.7,
          min2: 85.1,
          min: 88.5,
          median: 91.9,
          plus: 95.3,
          plus2: 98.7,
          plus3: 102.1,
        },
        headCircumference: {
          median: 56,
        },
      },
      {
        ageInMonth: 31,
        bbu: {
          min3: 82.3,
          min2: 85.7,
          min: 89.2,
          median: 92.7,
          plus: 96.1,
          plus2: 99.6,
          plus3: 103.0,
        },
        tbu: {
          min3: 2.9,
          min2: 3.4,
          min: 84.8,
          median: 87.8,
          plus: 90.9,
          plus2: 4.4,
          plus3: 5.0,
        },
        headCircumference: {
          median: 56,
        },
      },
      {
        ageInMonth: 32,
        bbu: {
          min3: 9.6,
          min2: 10.8,
          min: 12.1,
          median: 13.7,
          plus: 15.4,
          plus2: 17.4,
          plus3: 19.6,
        },
        tbu: {
          min3: 82.6,
          min2: 86.4,
          min: 89.9,
          median: 93.4,
          plus: 96.9,
          plus2: 100.4,
          plus3: 103.9,
        },
        headCircumference: {
          median: 57,
        },
      },
      {
        ageInMonth: 33,
        bbu: {
          min3: 9.7,
          min2: 10.9,
          min: 12.3,
          median: 13.8,
          plus: 15.6,
          plus2: 17.6,
          plus3: 19.9,
        },
        tbu: {
          min3: 83.4,
          min2: 86.9,
          min: 90.5,
          median: 94.1,
          plus: 97.6,
          plus2: 101.2,
          plus3: 104.8,
        },
        headCircumference: {
          median: 57,
        },
      },
      {
        ageInMonth: 34,
        bbu: {
          min3: 9.8,
          min2: 11.0,
          min: 12.4,
          median: 14.0,
          plus: 15.8,
          plus2: 17.8,
          plus3: 20.2,
        },
        tbu: {
          min3: 83.9,
          min2: 87.5,
          min: 91.9,
          median: 94.8,
          plus: 98.4,
          plus2: 102.0,
          plus3: 105.6,
        },
        headCircumference: {
          median: 58,
        },
      },
      {
        ageInMonth: 35,
        bbu: {
          min3: 9.9,
          min2: 11.2,
          min: 12.6,
          median: 14.2,
          plus: 16.0,
          plus2: 18.1,
          plus3: 20.4,
        },
        tbu: {
          min3: 84.4,
          min2: 88.1,
          min: 91.8,
          median: 95.4,
          plus: 99.1,
          plus2: 102.7,
          plus3: 106.4,
        },
        headCircumference: {
          median: 58,
        },
      },
      {
        ageInMonth: 36,
        bbu: {
          min3: 10.0,
          min2: 11.3,
          min: 12.7,
          median: 14.3,
          plus: 16.2,
          plus2: 18.3,
          plus3: 20.7,
        },
        tbu: {
          min3: 85.0,
          min2: 88.7,
          min: 92.4,
          median: 96.1,
          plus: 99.8,
          plus2: 103.5,
          plus3: 107.2,
        },
        headCircumference: {
          median: 59,
        },
      },
    ],
  };

  const nutritionStandartReference = {
    female: [{
        height: 45.0,
        bbu_tbu: {
          min: 2.3,
          median: 2.5,
          plus: 2.7
        },
      },
      {
        height: 47.0,
        bbu_tbu: {
          min: 2.6,
          median: 2.8,
          plus: 3.1
        },
      },
      {
        height: 49.0,
        bbu_tbu: {
          min: 2.9,
          median: 3.2,
          plus: 3.5
        },
      },
      {
        height: 51.0,
        bbu_tbu: {
          min: 3.3,
          median: 3.6,
          plus: 3.9
        },
      },
      {
        height: 53.0,
        bbu_tbu: {
          min: 3.7,
          median: 4.0,
          plus: 4.4
        },
      },
      {
        height: 55.0,
        bbu_tbu: {
          min: 4.2,
          median: 4.5,
          plus: 5.0
        },
      },
      {
        height: 57.0,
        bbu_tbu: {
          min: 4.6,
          median: 5.1,
          plus: 5.6
        },
      },
      {
        height: 59.0,
        bbu_tbu: {
          min: 5.1,
          median: 5.6,
          plus: 6.2
        },
      },
      {
        height: 61.0,
        bbu_tbu: {
          min: 5.6,
          median: 6.1,
          plus: 6.7
        },
      },
      {
        height: 63.0,
        bbu_tbu: {
          min: 6.0,
          median: 6.6,
          plus: 7.3
        },
      },
      {
        height: 65.0,
        bbu_tbu: {
          min: 6.5,
          median: 7.1,
          plus: 7.8
        },
      },
      {
        height: 67.0,
        bbu_tbu: {
          min: 6.9,
          median: 7.5,
          plus: 8.3
        },
      },
      {
        height: 69.0,
        bbu_tbu: {
          min: 7.3,
          median: 8.0,
          plus: 8.7
        },
      },
      {
        height: 71.0,
        bbu_tbu: {
          min: 7.7,
          median: 8.4,
          plus: 9.2
        },
      },
      {
        height: 73.0,
        bbu_tbu: {
          min: 8.0,
          median: 8.8,
          plus: 9.6
        },
      },
      {
        height: 75.0,
        bbu_tbu: {
          min: 8.4,
          median: 9.1,
          plus: 10.0
        },
      },
      {
        height: 77.0,
        bbu_tbu: {
          min: 8.7,
          median: 9.5,
          plus: 10.4
        },
      },
      {
        height: 79.0,
        bbu_tbu: {
          min: 9.1,
          median: 9.9,
          plus: 10.8
        },
      },
    ],
    male: [{
        height: 45.0,
        bbu_tbu: {
          min: 2.2,
          median: 2.4,
          plus: 2.7
        },
      },
      {
        height: 47.0,
        bbu_tbu: {
          min: 2.5,
          median: 2.8,
          plus: 3.0
        },
      },
      {
        height: 49.0,
        bbu_tbu: {
          min: 2.9,
          median: 3.1,
          plus: 3.4
        },
      },
      {
        height: 51.0,
        bbu_tbu: {
          min: 3.3,
          median: 3.6,
          plus: 3.9
        },
      },
      {
        height: 53.0,
        bbu_tbu: {
          min: 3.7,
          median: 4.0,
          plus: 4.4
        },
      },
      {
        height: 55.0,
        bbu_tbu: {
          min: 4.2,
          median: 4.5,
          plus: 5.0
        },
      },
      {
        height: 57.0,
        bbu_tbu: {
          min: 4.7,
          median: 5.1,
          plus: 5.6
        },
      },
      {
        height: 59.0,
        bbu_tbu: {
          min: 5.3,
          median: 5.7,
          plus: 6.2
        },
      },
      {
        height: 61.0,
        bbu_tbu: {
          min: 5.8,
          median: 6.3,
          plus: 6.8
        },
      },
      {
        height: 63.0,
        bbu_tbu: {
          min: 6.2,
          median: 6.8,
          plus: 7.4
        },
      },
      {
        height: 65.0,
        bbu_tbu: {
          min: 6.7,
          median: 7.3,
          plus: 7.9
        },
      },
      {
        height: 67.0,
        bbu_tbu: {
          min: 7.1,
          median: 7.7,
          plus: 8.4
        },
      },
      {
        height: 69.0,
        bbu_tbu: {
          min: 7.6,
          median: 8.2,
          plus: 8.9
        },
      },
      {
        height: 71.0,
        bbu_tbu: {
          min: 8.0,
          median: 8.6,
          plus: 9.4
        },
      },
      {
        height: 73.0,
        bbu_tbu: {
          min: 8.4,
          median: 9.1,
          plus: 9.9
        },
      },
      {
        height: 75.0,
        bbu_tbu: {
          min: 8.8,
          median: 9.5,
          plus: 10.3
        },
      },
    ],
  };

  // Tentukan standart referensi berdasarkan gender
  let calcReference, nutritionReference;
  if (babyGender !== "male") {
    calcReference = bbuTbuLkStandartReference.female;
    nutritionReference = nutritionStandartReference.female;
  } else {
    calcReference = bbuTbuLkStandartReference.male;
    nutritionReference = nutritionStandartReference.male;
  }

  // Sesuaikan parameter dengan usia bayi
  const calcParameter = calcReference.find((ref) => ref.ageInMonth == babyAge);
  // Sesuikan parameter dengan tinggi / panjang bayi
  const calcNutritionParameter = findNearestObject(height);

  function findNearestObject(value) {
    let closestObject = null;
    let closestDifference = Infinity;

    nutritionReference.forEach((item) => {
      const height = item.height;
      const difference = Math.abs(height - value);

      if (difference < closestDifference) {
        closestDifference = difference;
        closestObject = item;
      }
    });

    return closestObject;
  }

  function nutritionClassification(nutrisionResult) {
    if (nutrisionResult < -3) {
      return "Gizi Buruk";
    } else if (nutrisionResult >= -3 && nutrisionResult <= -2) {
      return "Gizi Kurang";
    } else if (nutrisionResult >= -2 && nutrisionResult <= 1) {
      return "Gizi Baik";
    } else if (nutrisionResult >= 1 && nutrisionResult <= 2) {
      return "Beresiko Gizi Lebih";
    } else if (nutrisionResult >= 2 && nutrisionResult <= 3) {
      return "Gizi Lebih";
    } else if (nutrisionResult >= 3) {
      return "Obesitas";
    }
  }

  function weightClassification(weightResult) {
    if (weightResult < -3) {
      return "Berat badan sangat kurang";
    } else if (weightResult >= -3 && weightResult <= -2) {
      return "Berat badan kurang";
    } else if (weightResult >= -2 && weightResult <= 1) {
      return "Berat badan normal";
    } else if (weightResult > 1) {
      return "Resiko berat badan lebih";
    }
  }

  function heightClassification(heightResult) {
    if (heightResult < -3) {
      return "Sangat pendek";
    } else if (heightResult >= -3 && heightResult <= -2) {
      return "Pendek";
    } else if (heightResult >= -2 && heightResult <= 3) {
      return "Normal";
    } else if (heightResult > 3) {
      return "Tinggi";
    }
  }

  function weightWithAge() {
    if (weight < calcParameter.bbu.median) {
      const result =
        (weight - calcParameter.bbu.median) /
        (calcParameter.bbu.median - calcParameter.bbu.min);
      return weightClassification(result);
    } else {
      const result =
        (weight - calcParameter.bbu.median) /
        (calcParameter.bbu.plus - calcParameter.bbu.median);
      return weightClassification(result);
    }
  }

  function heightWithAge() {
    if (height < calcParameter.tbu.median) {
      const result =
        (height - calcParameter.tbu.median) /
        (calcParameter.tbu.median - calcParameter.tbu.min);
      return heightClassification(result) + result;
    } else {
      const result =
        (height - calcParameter.tbu.median) /
        (calcParameter.tbu.plus - calcParameter.tbu.median);
      return heightClassification(result) + result;
    }
  }

  // function headCircumference() {
  //   if (head_circumference > calcParameter.lk) {
  //     return "Lebih besar";
  //   } else {
  //     return "Lebih kecil";
  //   }
  // }

  function nutritionConclusion() {
    if (weight < calcNutritionParameter.bbu_tbu.median) {
      const result =
        (weight - calcNutritionParameter.bbu_tbu.median) /
        (calcNutritionParameter.bbu_tbu.median -
          calcNutritionParameter.bbu_tbu.min);
      return nutritionClassification(result);
    } else {
      const result =
        (weight - calcNutritionParameter.bbu_tbu.median) /
        (calcNutritionParameter.bbu_tbu.plus -
          calcNutritionParameter.bbu_tbu.median);
      return nutritionClassification(result);
    }
  }

  return {
    weightWithAge,
    heightWithAge,
    nutritionConclusion,
  };
}

export function calculateBabyAgeInMonths(birthDate) {
  const birthDateParts = birthDate.split("-");
  const babyBirthDate = new Date(
    parseInt(birthDateParts[0], 10),
    parseInt(birthDateParts[1], 10) - 1,
    parseInt(birthDateParts[2], 10)
  );

  const currentDate = new Date();

  const ageInMilliseconds = currentDate - babyBirthDate;

  const millisecondsInMonth = 1000 * 60 * 60 * 24 * 30.44;
  const ageInMonths = ageInMilliseconds / millisecondsInMonth;

  return Math.floor(ageInMonths);
}