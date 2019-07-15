let listText = (call) => [
    {
        key: 'haksik',
        name: '신관',
        subtitle: '"학생회관 밥. 학식메뉴"',
        _clickFood: () => {
            call.props.navigation.navigate("Haksik")
        },
    },
    {
        key: 'dormitory',
        name: '학생생활관',
        subtitle: '"기숙사 식당 메뉴"',
        _clickFood: () => {
            call.props.navigation.navigate("Dormitory")
        },
    },
    {
        key: 'korean',
        name: '한식',
        subtitle: '"제주대에 한식당이 뭐가있을까?"',
        _clickFood: () => {
            call.props.navigation.navigate("Hansik")
        },
    },
    {
        key: 'foreign',
        name: '중•일•양식',
        subtitle: '"아니 이 산중턱에 배달이 온다고??"',
        _clickFood: () => {
            call.props.navigation.navigate("Etcera")
        },
    },
    {
        key: 'chicken',
        name: '치킨',
        subtitle: '"BHC, BBQ, 굽네 등 등 "',
        _clickFood: () => {
            call.props.navigation.navigate("Chicken")
        },
    }
]

export default listText;