/** Legal team page content. */

import { imageUrl } from '../lib/imageUrl';

import anthonyWilloughby from '../images/headshots/anthony.jpg';
import anthonyWilloughbyIi from '../images/headshots/anthony2.jpg';
import jasonBuccat from '../images/headshots/jason.jpg';
import jovanBlacknell from '../images/headshots/jovan.jpg';
import ronEpman from '../images/headshots/ron.jpg';
import jaayePersonLynn from '../images/headshots/jaaye.jpg';
import kellenDavis from '../images/headshots/kellen.jpg';
import monicaChaidez from '../images/headshots/monica.jpg';
import michaelWilloughby from '../images/headshots/michael.jpg';
import gladisMedina from '../images/headshots/gladis.jpg';
import normaAlvarez from '../images/headshots/norma.jpg';

export type Partner = {
  id: string;
  name: string;
  shortBio: string;
  headshot: string;
  email: string;
  profileHref: string;
};

export const partners: Partner[] = [
  {
    id: 'anthonyw',
    name: 'Anthony Willoughby',
    shortBio:
      'Anthony Willoughby is the lead trial attorney and senior partner at the law firm of Willoughby & Associates. He brings over two decades of in-depth expertise to each case, providing a mix of legal acumen and client service that is unmatched in the field.',
    headshot: imageUrl(anthonyWilloughby),
    email: 'anthony@firmwilloughby.us',
    profileHref: '/legal-team/anthony-willoughby/',
  },
  {
    id: 'anthonyw2',
    name: 'Anthony Willoughby II',
    shortBio:
      'Anthony Willoughby II is the managing attorney at the law firm of Willoughby & Associates. He is a man of many talents, and a passionate attorney who tirelessly fights for the constitutional rights of clients.',
    headshot: imageUrl(anthonyWilloughbyIi),
    email: 'anthonyw2@firmwilloughby.us',
    profileHref: '/legal-team/anthony-willoughby-2/',
  },
];

export type OfCounselMember = {
  name: string;
  headshot: string;
  modalId?: string;
};

export const ofCounsel: OfCounselMember[] = [
  { name: 'Jason Buccat', headshot: imageUrl(jasonBuccat), modalId: 'jasonBuccat' },
  { name: 'Jovan Blacknell', headshot: imageUrl(jovanBlacknell) },
  { name: 'Ron Epman', headshot: imageUrl(ronEpman), modalId: 'ronEpman' },
  { name: 'Jaaye Person-Lynn', headshot: imageUrl(jaayePersonLynn), modalId: 'jaayePerson' },
  { name: 'Kellen Davis', headshot: imageUrl(kellenDavis) },
];

export type StaffMember = {
  name: string;
  headshot: string;
};

export const staff: StaffMember[] = [
  { name: 'Monica Chaidez', headshot: imageUrl(monicaChaidez) },
  { name: 'Michael Willoughby', headshot: imageUrl(michaelWilloughby) },
  { name: 'Gladis Medina', headshot: imageUrl(gladisMedina) },
  { name: 'Norma Alvarez', headshot: imageUrl(normaAlvarez) },
];

export type TeamModal = {
  id: string;
  title: string;
  paragraphs: string[];
};

export const teamModals: TeamModal[] = [
  {
    id: 'anthonyWilloughby',
    title: 'Anthony Willoughby',
    paragraphs: [
      'Anthony Willoughby is the lead trial attorney and senior partner at the law firm of Willoughby & Associates. He brings over two decades of in-depth expertise to each case, providing a mix of legal acumen and client service that is unmatched in the field.',
      'In addition to his client-focused legal practice, Mr. Willoughby also has been honored with several political and government appointments throughout his career. In 2003 Mr. Willoughby was appointed to the Water Appeals Board in Los Angeles, in 2001 he was appointed to the Los Angeles County District Attorney Crime Prevention Board, and in 2000 he was appointed to the Los Angeles County Water Appeals Board and the South Los Angeles Planning Commission. From 2001 to Present he has served on the Los Angeles County Tax Assessment Appeals Board.',
      'In 1998 Mr. Willoughby was appointed Chair of the Public Policy Committee of the New Leaders and elected President of the New Leaders. From 1998 to Present he has served as the President of the Ladera Crest Homeowners Association. In 1993 the NAACP Legal Defense Fund honored him as Civil Rights Advocate of the Year, and in 1992 he served on the Finance Committee to elect President Bill Clinton.',
      'Mr. Willoughby received a Bachelor of Arts degree in Political Science and Economics from the University of Southern California, and received a Juris Doctorate degree from Hastings Law School, where he was published for his research on Corporate Law. In 2004 he was honored as the University of Southern California’s Alumni of the Year.',
    ],
  },
  {
    id: 'anthonyWilloughby2',
    title: 'Anthony Willoughby II',
    paragraphs: [
      'Anthony Willoughby II is the managing attorney at the law firm of Willoughby & Associates. He is a man of many talents, and a passionate attorney who tirelessly fights for the constitutional rights of clients.',
      'Mr. Willoughby obtained a Bachelor of Science degree from the La Sierra University. This scientific background affords him a perspective that is unique amongst legal professionals. During his time in law school at the University of San Francisco School of Law, Mr. Willoughby focused on development of international and constitutional law, and served as Black History Month Chair for the Black Law Students Association.',
      'Mr. Willoughby has extensive experience with the intersection between the Asian and American legal systems, defending the fundamental rights we each possess. His diverse skill set includes lobbying on behalf of municipalities and interest groups, contract negotiations, employment litigation, civil rights litigation, and appellate advocacy.',
      'Before returning to Willoughby & Associates, Mr. Willoughby was a Judicial Extern with the Los Angeles County Superior Court working under the tutiledge of the Honorable Steven P. Sanora and at the United States Bankruptcy Court in the Chambers of the Honorable Erithe A. Smith.',
    ],
  },
  {
    id: 'jasonBuccat',
    title: 'Jason Buccat',
    paragraphs: [
      'Jason Buccat is a successful litigator with expertise in criminal, employment, real estate, family, and education law. Mr. Buccat represented at risk youth and their families through the Thomas & Mack Legal Clinic, for which he received a CALI Award. He also served as a Congressional extern for United States Senate Majority Leader Senator Harry Reid and as a Judicial extern for the Honorable Frank J. Ochoa. Mr. Buccat received Bachelor of Arts degrees in Psychology and Sociology from the University of California, Los Angeles, and received a Juris Doctorate degree from the University of Nevada, Las Vegas - Boyd School of Law.',
    ],
  },
  {
    id: 'jovanBlacknell',
    title: 'Jovan Blacknell',
    paragraphs: [''],
  },
  {
    id: 'ronEpman',
    title: 'Ron Epman',
    paragraphs: [
      'A business and estate planning attorney with over 45 years of experience, Ronald J. Epman is a master of his craft. A graduate of the University of California at Berkley, as well as Southwestern University School of Law, Mr. Epman has seen it all in his time as an attorney. Mr. Epman has expertise in a wide range of areas within business and contract law, including business formation and litigation. Additionally, Mr. Epman has decades of experience drafting wills, trusts, and other estate documents to protect client assets from any perils that may come.',
    ],
  },
  {
    id: 'jaayePerson',
    title: 'Jaaye Person-Lynn',
    paragraphs: [
      'Affectionately referred to as the Lincoln Lawyer, Jaaye Person Lynn is a graduate of Hampton University and Howard University School of Law. After spending 6 years at the Los Angeles County Public Defender’s Office, Mr. Person-Lynn started his solo law practice in October 2013. With a flair for the dramatic and a style all his own, Mr. Person-Lynn focuses himself on the areas of criminal defense, housing and civil rights. He has been running “Legal Night,” which is part of the National Action Network in Los Angeles since June 2013.',
    ],
  },
  {
    id: 'kellenDavis',
    title: 'Kellen Davis',
    paragraphs: ['Kellen bio'],
  },
];
