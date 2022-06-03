import { FRIENDSHIP_STATUS } from "../app/constant"

export const canAddFriendByStatus = (status) => {
  switch (status) {
    case FRIENDSHIP_STATUS.NULL:
      return true
    case FRIENDSHIP_STATUS.PENDING:
      return false
    case FRIENDSHIP_STATUS.ACCEPTED:
      return false
    case FRIENDSHIP_STATUS.DECLINED:
      return true
    case FRIENDSHIP_STATUS.CANCEL:
      return true
    default:
      return false
  }
}

export const canRemoveFriendByStatus = (status) => {
  switch (status) {
    case FRIENDSHIP_STATUS.NULL:
      return false
    case FRIENDSHIP_STATUS.PENDING:
      return false
    case FRIENDSHIP_STATUS.ACCEPTED:
      return true
    case FRIENDSHIP_STATUS.DECLINED:
      return false
    case FRIENDSHIP_STATUS.CANCEL:
      return false
    default:
      return false
  }
}