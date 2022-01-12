export default class PostService {
    constructor(public schema:any){
    this.schema = schema;
}
    async findById (id:any) {
            const findById = await this.schema.findById(id);
            return findById;
    }
}