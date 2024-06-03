export class Education {
    constructor(establishment, degree, start, end, notFinished){
        this.establishment = establishment,
        this.degree = degree,
        this.start = start,
        this.end = end,
        this.notFinished = notFinished
    }
}

export class WorkExperience {
    constructor(company, position, start, end, description, status) {
      this.company = company;
      this.position = position;
      this.start = start;
      this.end = end;
      this.description = description;
      this.status = status;
    }
  }