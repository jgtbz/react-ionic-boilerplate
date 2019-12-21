import React from 'react'
import { IonItem } from '@ionic/react'
import AppLabel from './AppLabel'
import AppFormInputError from './AppFormInputError'

const Component = ({ label, placeholder, name, value, error, touched, Input, handleChange }) => (
  <IonItem lines="none">
    <AppLabel title={label} error={error} touched={touched} />
    <Input
      name={name}
      placeholder={placeholder}
      value={value}
      onIonInput={handleChange}
    />
    <AppFormInputError
      error={error}
      touched={touched}
    />
  </IonItem>
) 

export default Component
