export class DateUtils {

  public static ymdToDmy(date: string) {
    if (date.length !== 10) {
      throw new Error('The date passed to the method DateUtils.ymdToDmy() is not in the formate yyyy-mm-dd');
    } else {
      const dates = date.split('-');
      if (dates.length !== 3) {
        throw new Error('The date passed to the method DateUtils.ymdToDmy() is not in the formate yyyy-mm-dd');
      }
      return `${dates[2]}/${dates[1]}/${dates[0]}`;
    }
  }

}
