import 'package:flutter/material.dart';

ThemeData light = ThemeData(
  fontFamily: 'Roboto',
  primaryColor: Color(0xFF1cadb1),
  secondaryHeaderColor: Color(0xFF1ED7AA),
  disabledColor: Color(0xFFBABFC4),
  brightness: Brightness.light,
  hintColor: Color(0xFF9F9F9F),
  cardColor: Colors.white,
  textButtonTheme: TextButtonThemeData(
      style: TextButton.styleFrom(foregroundColor: Color(0xFF1cadb1))),
  colorScheme: ColorScheme.light(
          primary: Color(0xFF1cadb1), secondary: Color(0xFF1cadb1))
      .copyWith(background: Color(0xFFF3F3F3))
      .copyWith(error: Color(0xFFE84D4F)),
);
