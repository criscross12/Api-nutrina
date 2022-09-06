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

export const imcFormulation = (weight, height) => {
  const imc = weight / Math.pow(height, 2);
  return imc;
};

export const iccFormulation = (waist, hip) => {
  const icc = waist / hip;
  return icc;
};

// P. Tricipital + P. Subescapular + P. Supraespinal
export const plusThreePl = (pl_triceps, pl_subscapular, pl_supraspinal) => {
  const plusThree = pl_triceps + pl_subscapular + pl_supraspinal;
  return plusThree;
};

//Suma 5 pliegues: P. Tricipital + P. Subescapular + P. Supraespinal + P. Abdominal +  P. Muslo
export const plusFivePl = (
  pl_triceps,
  pl_subscapular,
  pl_supraspinal,
  pl_abdominal,
  pl_thigh,
) => {
  const plusFive =
    pl_triceps + pl_subscapular + pl_supraspinal + pl_abdominal + pl_thigh;
  return plusFive;
};

export const somotype = (size, plusThree) => {
  let x1 = (170.18 / size) * plusThree;
  let x2 = Math.pow(x1, 2);
  let x3 = Math.pow(x1, 3);
};
