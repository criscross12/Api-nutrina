import { Document } from 'mongoose';

export class Helpers {
  parseDocument = (document: Document) =>
    document ? JSON.parse(JSON.stringify(document)) : document;
}

export const GetAge = (FN) => {
  const today: any = new Date();
  const current_year = parseInt(today.getFullYear());
  const current_month = parseInt(today.getMonth() + 1);
  const current_day = parseInt(today.getDate());

  const yearday = parseInt(String(FN).substring(0, 4));
  const monthday = parseInt(String(FN).substring(5, 7));
  const birthday = parseInt(String(FN).substring(8, 10));

  let age = current_year - yearday;
  if (current_month < monthday) {
    age--;
  } else if (current_month === monthday) {
    if (current_day < birthday) {
      age--;
    }
  }
  return age;
};

export const imcFormulation = (weight: number, height: number) => {
  return weight / Math.pow(height, 2);
};

export const iccFormulation = (waist: number, hip: number) => {
  return waist / hip;
};

// P. Tricipital + P. Subescapular + P. Supraespinal
export const plusThreePl = (
  pl_triceps: number,
  pl_subscapular: number,
  pl_supraspinal: number,
) => {
  let two = pl_triceps + pl_subscapular;
  console.log(two);
  const tre = two + pl_supraspinal;
  console.log(tre);

  return pl_triceps + pl_subscapular + pl_supraspinal;
};

export const suma = (a, b) => {
  console.log(a + b);
};

//Suma 5 pliegues: P. Tricipital + P. Subescapular + P. Supraespinal + P. Abdominal +  P. Muslo
export const plusFivePl = (
  pl_triceps: number,
  pl_subscapular: number,
  pl_supraspinal: number,
  pl_abdominal: number,
  pl_thigh: number,
) => {
  return pl_triceps + pl_subscapular + pl_supraspinal + pl_abdominal + pl_thigh;
};

// export const somotype = (size, plusThree) => {
//   let x1 = (170.18 / size) * plusThree;
//   let x2 = Math.pow(x1, 2);
//   let x3 = Math.pow(x1, 3);
//   let endomorfia = ((-0.7182)+(((0.1451* x1) - (0.00068)* x2) + (0.0000014 * x3) ))
//   let mesomorfia = ((0.858))
// };

export const fao_who_onu = (age: number, sex: String, weight: number) => {
  let fao_res: number;
  if (sex == 'M') {
    //TODO Resivar como seran las condicionales según la edad
    if (age >= 10 && age <= 18) {
      fao_res = 17.5 * weight + 651;
    } else if (age >= 19 && age <= 30) {
      fao_res = 15.3 * weight + 679;
    } else if (age >= 31 && age < 60) {
      fao_res = 11.6 * weight + 879;
    } else if (age >= 60) {
      fao_res = 13.5 * weight + 987;
    }
  } else if (sex == 'F') {
    if (age >= 10 && age <= 18) {
      fao_res = 12.2 * weight + 746;
    } else if (age >= 19 && age <= 30) {
      fao_res = 14.7 * weight + 496;
    } else if (age >= 31 && age < 60) {
      fao_res = 8.7 * weight + 829;
    } else if (age >= 60) {
      fao_res = 10.5 * weight + 596;
    }
  }
  console.log('FAO: ', fao_res);
  return fao_res;
};

export const HarrisBenedict = (
  sex: String,
  age: number,
  weight: number,
  height: number,
) => {
  let res: number;
  if (sex == 'M') {
    res = 66.47 + (13.75 * weight + 5 * height - 6.76 * age);
  } else if (sex == 'F') {
    res = 655.1 + (9.56 * weight + 1.85 * height - 4.68 * age);
  }
  console.log('Harris: ', res);
  return res;
};

export const valencia = (sex: String, age: number, weight: number) => {
  //TODO Preguntar sobre el peso
  let resValencia: number;
  if (sex == 'M') {
    if (age >= 18 && age <= 30) {
      resValencia = 13.37 * weight + 747;
    } else if (age >= 31 && age < 60) {
      resValencia = 13.08 * weight + 693;
    } else if (age >= 60) {
      resValencia = 14.21 * weight + 429;
    }
  } else if (sex == 'F') {
    if (age >= 18 && age <= 30) {
      resValencia = 11.02 * weight + 679;
    } else if (age >= 31 && age < 60) {
      resValencia = 10.92 * weight + 677;
    } else if (age >= 60) {
      resValencia = 10.98 * weight + 520;
    }
  }
  console.log('Valencia: ', resValencia);
  return resValencia;
};

export const mifflinSN = (
  sex: String,
  weight: number,
  age: number,
  height: number,
) => {
  let resMifflinSN: number;
  if (sex == 'M') {
    resMifflinSN = 9.99 * weight + 6.25 * height - 4.92 * age + 5;
  } else if (sex == 'F') {
    resMifflinSN = 9.99 * weight + 6.25 * height - 4.92 * age - 161;
  }
  console.log('Mifflin: ', resMifflinSN);
  return resMifflinSN;
};

export const averageCalories = (
  valencia: number,
  mifflin_st: number,
  harris_benedict: number,
  fao_who_onu: number,
) => {
  return (valencia + mifflin_st + harris_benedict + fao_who_onu) / 4;
};

export const kcalCarboHydratesRes = (
  averageCalories: number,
  perDistribution: number,
) => {
  return (averageCalories * perDistribution) / 100;
};

export const kcalLipids = (
  averageCalories: number,
  perDistribution: number,
) => {
  return (averageCalories * perDistribution) / 100;
};

export const kcalProteins = (
  averageCalories: number,
  perDistribution: number,
) => {
  return (averageCalories * perDistribution) / 100;
};

export const GCarboHydratesRes = (kcalCarboHydratesValue: number) => {
  return kcalCarboHydratesValue / 4;
};

export const GcalLipids = (kcalLipidsValue: number) => {
  return kcalLipidsValue / 9;
};

export const GcalProteins = (kcalProteinsValue: number) => {
  return kcalProteinsValue / 9;
};

export const CorrectedArmF = (c_contracted_arm: number, pl_triceps: number) => {
  return c_contracted_arm - pl_triceps / 10;
};

export const CorrectedLegF = (c_leg_max: number, pl_leg: number) => {
  return c_leg_max - pl_leg / 10;
};
