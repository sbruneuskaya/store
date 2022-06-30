export function addToOrder(item) {
    let isArr = false
    this.state.orders.forEach(el => {
        if (el.id === item.id) {
            isArr = true;
        }
    })
    if (!isArr) {

        this.setState({
                orders: [...this.state.orders, item]
            }
        )
    }

}