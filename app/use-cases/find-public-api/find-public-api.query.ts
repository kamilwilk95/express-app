interface FindPublicApiQueryProps {
  name?: string;
  cors?: boolean;
}

export class FindPublicApiQuery {
  readonly name?: string;
  readonly cors?: boolean;

  constructor(props: FindPublicApiQueryProps) {
    this.name = props.name;
    this.cors = props.cors;
  }
}