export default class Task {
  constructor(source = {}){
    this.title = source.title || '名無しのタスク'
    this.estimated_on = source.estimated_on || ''
    this.completed_at = source.completed_at || ''
    this.memo = source.memo || ''
  }
}
