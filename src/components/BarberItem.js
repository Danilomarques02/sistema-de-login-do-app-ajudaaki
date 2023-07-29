import React from 'react'
import { ActivityIndicatorBase } from 'react-native'
import styled from 'styled-components'

const Area = styled.TouchableOpacity``;

const Avatar = styled.image``;

const InfoArea = styled.View``;

const UserName = styled.text``;

const SeeProfileButton = styled.View``;

const SeeProfileButtonText = styled.Text``;

export default ({data}) =>{
    return(
        <Area>
        <Avatar source={{uri:data.Avatar}}/>
        <InfoArea>
            <UserName>{data.name}</UserName>

            <SeeProfileButton>
                <SeeProfileButtonText>Ver Perfil</SeeProfileButtonText>
            </SeeProfileButton>
        </InfoArea>
        </Area>
    )
}