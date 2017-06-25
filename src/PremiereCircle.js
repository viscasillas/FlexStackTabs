// import { S3 } from 'app/config';
const PremiereCircle = {
  description: 'Premiere Circle',
  iconCss: null,
  id: 3,
  itemType: 'program',
  name: 'EC',
  nameKey: 'EC',
  route: null,
  sortOrder: 10,
  pepiDetails: {
    flagText: 'Updates!',
    footerNotes: false, // accepts string of false
    headerNotes: 'Formally Premier V<span class="hidden-xs hidden-sm"><br /></span> and Car Program',
    badges: [
      {
        title: 'Training',
        image: `/clientassets/100102/images/pepi/badge_training.png`
      },
      {
        title: 'Maui',
        image: `/clientassets/100102/images/pepi/badge_training.png`
      }
    ],
    tables: [
      {
        isNew: false,
        title: 'First Time Achiever',
        eyebrow: [
          { title: 'CURRENT QUALIFICATIONS', span: 1, insignificant: true },
          { title: 'FUTURE QUALIFICATIONS', span: 1, tooltip: 'I have some tooltip text' }
        ],
        records: [
          [{ text: '11 EC LEGS, 1 LV LEG', icon: false }, { text: '0.5%', icon: false }],
          [{ text: '11 EC LEGS, 1 LV LEG', icon: false }, { text: '0.5%', icon: false }],
          [{ text: '11 EC LEGS, 1 LV LEG', icon: false }, { text: '0.5%', icon: false }],
          [{ text: '11 EC LEGS, 1 LV LEG', icon: false }, { text: '0.5%', icon: false }]
        ]
      },
      {
        isNew: true,
        title: 'Repeat Achiever',
        eyebrow: [{ title: 'FUTURE QUALIFICATIONS', span: 5, tooltip: 'I have some tooltip text 222' }],
        headers: [
          { title: 'Year 2', span: 1 },
          { title: 'Year 3', span: 1 },
          { title: 'Year 4', span: 1 },
          { title: 'Year 5', span: 1 },
          { title: 'Year 6+', span: 1 }
        ],
        records: [
          [
            { text: '15 EC, 6 LV', icon: false, fontSize: 15 },
            { text: '15 EC, 7 LV', icon: false, fontSize: 15 },
            { text: '15 EC, 8 LV', icon: false, fontSize: 15 },
            { text: '15 EC, 9 LV', icon: false, fontSize: 15 },
            { text: '15 EC, 10 LV', icon: false, fontSize: 15 }
          ],
          [
            { text: '40,000 L1+L2', icon: false, fontSize: 15 },
            { text: '40,000 L1+L2', icon: false, fontSize: 15 },
            { text: '40,000 L1+L2', icon: false, fontSize: 15 },
            { text: '40,000 L1+L2', icon: false, fontSize: 15 },
            { text: '40,000 L1+L2', icon: false, fontSize: 15 }
          ],
          [
            { text: '400,000 L1-L6', icon: false, fontSize: 15 },
            { text: '400,000 L1-L6', icon: false, fontSize: 15 },
            { text: '400,000 L1-L6', icon: false, fontSize: 15 },
            { text: '400,000 L1-L6', icon: false, fontSize: 15 },
            { text: '400,000 L1-L6', icon: false, fontSize: 15 }
          ],
          [
            { text: '4<small>Consecutive <br> Months</small>', icon: false, fontSize: 15 },
            { text: '4<small>Consecutive <br> Months</small>', icon: false, fontSize: 15 },
            { text: '4<small>Consecutive <br> Months</small>', icon: false, fontSize: 15 },
            { text: '4<small>Consecutive <br> Months</small>', icon: false, fontSize: 15 },
            { text: '4<small>Consecutive <br> Months</small>', icon: false, fontSize: 15 }
          ]
        ]
      },
      {
        isNew: true,
        title: 'High Achiever',
        eyebrow: [
          { title: 'DESCRIPTION', span: 1 },
          {
            title: 'FUTURE QUALIFICATIONS',
            span: 3,
            width: 50
          }
        ],
        records: [
          [
            {
              text: 'High achieving Consultants with a minimum LV structure of 10 and L1-L6 of 1,000,000 will earn the opportunity to become a Corporate Trainer. Corporate training includes...',
              icon: false,
              verticalSpan: 4
            },
            {
              text: '15 EC, 10 LV',
              icon: false
            }
          ],
          [
            {
              text: '40,000 L1+L2',
              icon: false
            }
          ],
          [
            {
              text: '1,000,000 L1-L6',
              icon: false
            }
          ],
          [
            {
              text: '4 <small>Consecutive Months</small>',
              icon: false
            }
          ]
        ]
      }
    ]
  }
};
export default PremiereCircle;
